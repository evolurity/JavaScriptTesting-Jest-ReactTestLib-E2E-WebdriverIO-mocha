const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading');
    }

    get usersList() {
        return $('#users-list');
    }

    get usersItems() {
        return browser.react$$('User');
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 5000});
            await this.usersList.waitForDisplayed({timeout: 5000});
        } catch (e) {
            throw new Error('Не удалось загрузить пользователей');
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length;

            if (!usersCount) throw new Error('Users not found');

            await this.usersItems[0].$('#user-delete').click();

            const usersCountAfterDelete = await this.usersItems.length;

            if (usersCount - usersCountAfterDelete !== 1) throw new Error('Удаление произошло некорректно');
        } catch (e) {
            throw new Error('Пользователя удалить не удалось. ' + e.message);
        }
    }

    open() {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();
