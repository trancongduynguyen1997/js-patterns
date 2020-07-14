class CatalogGroup {
    constructor(name, composites = []) {
        this.name = name;
        this.composites = composites;
    }

    get total() {
        return this.composites.reduce( (total, item) => total + item.total, 0);
    }

    print() {
        console.log(`Group ${this.name}`)
        this.composites.forEach(item => item.print());
    }

}

module.exports = CatalogGroup;