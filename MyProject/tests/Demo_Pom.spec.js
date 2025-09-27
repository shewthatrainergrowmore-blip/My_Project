import { test } from '@playwright/test'
import { Demo_TestCase } from './Demo.js'
test("Demo_Testcase_Using_POM :", async ({ page }) => {
    const Demo_Test = new Demo_TestCase(page);
    await Demo_Test.Navigate("https://vinothqaacademy.com/demo-site/");
    await Demo_Test.FirstName("Rahul");
    await Demo_Test.LastName("BoopathyRaj");
    await Demo_Test.M_Radio();
    await Demo_Test.CourseInterested();
    await Demo_Test.AddressDetails("15/15 KrishnasamyNagar", "SandBrix Apartments", "Coimbatore", "641045");
    await Demo_Test.Country("India");
    await Demo_Test.Email("rahulboopathyraj96@gmail.com");
    await Demo_Test.Date_1();
    await Demo_Test.Date_2();
    await Demo_Test.ConvenientTime_HH("10");
    await Demo_Test.ConvenientTime_MM("30");

    await Demo_Test.ConvenientTime_MM("40");
    await Demo_Test.MobileNo("947023956");
    await Demo_Test.QueryText("I need to Join next week");
    await Demo_Test.VerificationDigit("33");
    await Demo_Test.Submit();















});