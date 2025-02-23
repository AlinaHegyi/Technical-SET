import { type Page, type Locator } from '@playwright/test';

export class ImageGenerationPage {
  readonly page: Page;
  readonly url: string = 'https://hacktheicon.scramblerducati.com/create';
  readonly inputPrompt: Locator;
  readonly generateButton: Locator;
  readonly generatedImages: Locator;
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly selectCountry: Locator;
  readonly inputEmail: Locator;
  readonly termsCheckBox: Locator;
  readonly privacyPolicyCheckBox: Locator;
  readonly submitButton: Locator;
  readonly nextButton: Locator;
  readonly downloadButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputPrompt = page.locator('textarea[name="prompt"]:visible');
    this.generateButton = page.locator('button.secondary-button:visible');
    this.generatedImages = page.locator('img[alt="generated image"]:visible');
    this.inputFirstName = page.locator('input[placeholder="First Name"]:visible');
    this.inputLastName = page.locator('input[placeholder="Last Name"]:visible');
    this.inputEmail = page.locator('input[placeholder="Email"]:visible');
    this.selectCountry = page.locator('select[aria-hidden="true"]:visible');
    this.termsCheckBox = page.locator('#terms-check:visible');
    this.privacyPolicyCheckBox = page.locator('#privacy-policy-check:visible');
    this.submitButton = page.locator('.secondary-button[type="submit"]:visible');
    this.nextButton = page.locator('.primary-button:visible');
    this.downloadButton = page.locator('button.secondary-button:visible');
  }

  /** Navigate to the image generation page
   * @returns {Promise<void>}
   * @description This method navigates to the image generation page of the Ducati Scrambler website.
   */
  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }




  /** Enter a prompt for image generation
   * @param {string} prompt - The prompt to enter
   * @returns {Promise<void>}
   * @description This method fills in the prompt input field with the provided prompt.
   */
  async enterPrompt(prompt: string): Promise<void> {
    await this.inputPrompt.fill(prompt);
  }







  /** Click the generate button
   * @param {string} prompt - The prompt to enter
   * @returns {Promise<void>}
   * @description This method clicks the generate button to start the image generation process.
   * It is used after filling in the prompt input field.
   */
  async clickGenerate(): Promise<void> {
    await this.generateButton.click();
  }







  /** Wait for the generated images to appear
   * @returns {Promise<void>}
   * @description This method waits for the generated images to be visible on the page.
   * It is used after clicking the generate button.
   * It ensures that the images are fully loaded before proceeding with further actions.
   */
  async waitForImageGeneration(): Promise<void> {
    await this.generatedImages.waitFor({ state: 'visible' });
  }



  
  /** Download the generated image
   * @returns {Promise<void>}
   * @description This method clicks the download button to download the generated image.
   * It is used after the image generation process is complete.
   * It ensures that the user can save the generated image to their device.
   */
  async downloadImage(): Promise<void> {
    await this.downloadButton.click();
  }








  /**This method fills in the user details form
   * with the provided first name, last name, email, and country.
   * It is used to collect user information before submitting the form.
   *
   * @returns {Promise<void>}
   * @param firstName
   * @param lastName
   * @param email
   * @param value
   */

  async fillUserDetails(firstName: string, lastName: string, email: string, value: string): Promise<void> {
    await this.inputFirstName.fill(firstName);
    await this.inputLastName.fill(lastName);
    await this.inputEmail.fill(email);
    await this.selectCountry.selectOption({ value: 'Andorra' });
  }





  /** Accept Terms & Conditions
   * @returns {Promise<void>}
   * @description This method checks the terms and conditions and privacy policy checkboxes.
   * It is used to ensure that the user agrees to the terms and conditions before submitting their details.
   * It is important for compliance and legal reasons.
   */
  async acceptTermsAndPrivacy(): Promise<void> {
    await this.termsCheckBox.check();
    await this.privacyPolicyCheckBox.check();
  }





  /** Click the SUBMIT button
   * @returns {Promise<void>}
   * @description This method clicks the submit button to submit the user details and accept the terms and conditions.
   * It is used after filling in the user details and accepting the terms and conditions.
   */
  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }




  
/**
 * Click the NEXT button
 * @returns {Promise<void>} 
 * @description This method clicks the next button to proceed to the next step after selecting an image.
 * It is used after the user has selected one of the generated images.
 */

  async clickNext(): Promise<void> {
    await this.nextButton.click();
  }
};
