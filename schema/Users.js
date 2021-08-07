cube(`Users`, {
  sql: `
  SELECT  u.*
  FROM    users u`,

  measures: {
    count: {
      sql: `status`,
      type: `count`
    },

  },

  dimensions: {
    names: {
      sql: `name`,
      type: `string`
    },
    status: {
      sql: `status`,
      type: `number`
    }
  },

});
