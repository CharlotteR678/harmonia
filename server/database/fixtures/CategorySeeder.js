const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [{ cat_name: "Comédie" }, { cat_name: "Science-Fiction" }];

    categories.forEach((category) => {
     const categoryWithRefName = {
        ...category,
        refName: `category_${category.cat_name}`,
      };

      this.insert(categoryWithRefName); // insert into category(name) values (?)
    });
  }
}

// Export the CategorySeeder class
module.exports = CategorySeeder;