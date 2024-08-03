import { column, defineDb, defineTable } from 'astro:db'

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    pseudo: column.text({ optional: true }),
    email: column.text(),
    password: column.text(),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: { User },
})

