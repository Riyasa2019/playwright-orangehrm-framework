class AdminPage {

    constructor(page) {

        this.page = page;

        this.adminMenu = page.locator('//span[text()="Admin"]');

        this.usernameSearchBox = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');

        this.searchButton = page.locator('//button[@type="submit"]');

        this.tableRows = page.locator('.oxd-table-card');

        this.usernameColumn = page.locator(
            '//div[@class="oxd-table-body"]/div/div/div[2]'
        );
    }

    async navigateToAdminPage() {

        await this.adminMenu.click();
    }

    async searchUsername(username) {

        await this.usernameSearchBox.fill(username);

        await this.searchButton.click();
    }

    async getRowCount() {

        return await this.tableRows.count();
    }
}

module.exports = AdminPage;