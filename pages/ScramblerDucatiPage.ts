import { type Locator, type Page } from '@playwright/test';

export class ScramblerDucatiPage {
  readonly url: string = 'https://hacktheicon.scramblerducati.com';
  readonly page: Page;
  readonly startToCreateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startToCreateButton = page.locator('.a.primary-button:visible');
  }

  /**
   * Navigate to the Ducati Scrambler website
   * @returns {Promise<void>}
   * @description This method navigates to the Ducati Scrambler website.
   */

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  /**
   * Click the "Start to Create" button
   * @returns {Promise<void>}
   * @description This method clicks the "Start to Create" button on the page.
   * It is used to navigate to the image creation page.
   */

  async clickCreateButton(): Promise<void> {
    const startToCreateButton = this.page.locator('a.primary-button:visible');
    await startToCreateButton.click();
  }
};
