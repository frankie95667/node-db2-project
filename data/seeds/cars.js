
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '2FMDK3GC1BBA60069',
          make: "Toyota",
          model: "Rav4",
          mileage: 50549,
          transmission_type: "manual",
          title_status: "clean"
        },
        {
          vin: 'WMWRH33586TF87323',
          make: "Subaru",
          model: "WRX STI",
          mileage: 60000,
          transmission_type: "manual",
          title_status: "clean"
        },
        {
          vin: '1HGCM56694A143573',
          make: "Nissan",
          model: "Versa",
          mileage: 101,
          transmission_type: "automatic",
          title_status: "salvage"
        },
      ]);
    });
};
