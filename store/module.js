export default async (type) => {
  console.log("CREATING MODULE FOR: ", type)
  const defaultState = (await import(`../data/${type}.ts`)).default

  const defaultView = defaultState.views.find((item) => item?.default === true)
  const defaultSort = [
    defaultState.sort[
      Object.keys(defaultState.sort).find(
        (item) => defaultState.sort[item].default === true
      )
    ],
  ]
  const buildForm = async (schema) => {
    try {
      let form = {}
console.log("building form");
      for await (const key of Object.keys(schema)) {
        if (schema[key]?.template) {
          const templateState = (
            await import(`../data/${schema[key]?.template}.ts`)
          ).default
          form[key] = await buildForm(templateState.schema)
        } else if (schema[key]?.items) {
          if (Array.isArray(schema[key]?.items)) {
            if (!form[key]) form[key] = [{}]
            for await (const item of schema[key]?.items) {
              form[key][0] = {
                ...form[key][0],
                ...(await buildForm({ [item.key]: item })),
              }
            }
          } else {
            if (!form[key]) form[key] = {}
            for await (const subkey of Object.keys(schema[key].items)) {
              form[key] = {
                ...form[key],
                ...(await buildForm({ [subkey]: schema[key].items[subkey] })),
              }
            }
          }
        } else {
          form[key] = schema[key]?.default ?? ""
        }
      }
      return form
    } catch (error) {
      console.log("error building form: ", error)
    }
  }
  const defaultForm = await buildForm(defaultState.schema)

  return {
    form: defaultForm,
    _defaults: defaultForm,
    items: [],
    current: null,
    view: defaultView.name,
    total: 0,
    filters: {
      years: [],
      tags: [],
      language: [],
      thematic: [],
      discipline: [],
      type: [],
      ...defaultState.defaultFilters,
    },
    style: "APA",
    loading: [],
    skip: 0,
    limit: defaultState.perPage.default,
    search: "",
    page: 1,
    sortBy: [defaultSort[0].value[0]],
    sortDesc: defaultSort[0].value[1] === "desc",
    numberOfPages: 0,
    itemsPerPage: defaultState.perPage.default,
    itemsPerPageArray: defaultState.perPage.options,
    filtersCount: 0,
    ...defaultState,
  }
}
