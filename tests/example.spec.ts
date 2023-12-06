import { test, expect } from '@playwright/test';
import { Login } from '../Page/login';
import { LeftNav } from '../Page/leftNav';
import { Tasks } from '../Page/tasks';

let login: Login;
let leftNav: LeftNav;
let tasks: Tasks;

test.beforeEach(async ({ page }) => {
  login = new Login(page);
  leftNav = new LeftNav(page);
  tasks = new Tasks(page);
});

test('Complete Task', async ({ page }) => {
  test.info().annotations.push(({
    type: 'Test',
    description: 'This test will pass because the book name is correct'
  }))

  const user = {
    email: '',
    password: '',
    url: 'https://app.asana.com/-/login'
  }

  test.step('Login', async () => {
    await login.login(user.url, user.email, user.password);
  });

  await leftNav.leftNavOption('My tasks').highlight();
  await tasks.completeTask('Second Task').click();

});

test('Move Task In Board View', async ({ page }) => {

  const user = {
    email: 'ben+pose@workwithloop.com',
    password: 'Password123',
    url: 'https://app.asana.com/-/login'
  }

  await login.login(user.url, user.email, user.password);
  await leftNav.leftNavOption('My tasks').click();
  await page.getByRole('link', { name: 'Board' }).click();
  await tasks.card('Second Task').hover();
  await tasks.addDueDate('Second Task').click();
  await tasks.chooseDate('12').click();
  await page.pause();

});

test('Drag ', async ({ page }) => {
  let login = new Login(page);
  let leftNav = new LeftNav(page);
  let tasks = new Tasks(page);

  const user = {
    email: 'ben+pose@workwithloop.com',
    password: 'Password123',
    url: 'https://app.asana.com/-/login'
  }

  await login.login(user.url, user.email, user.password);
  await leftNav.leftNavOption('My tasks').click();
  await page.getByRole('link', { name: 'Board' }).click();
  await tasks.card('Second Task').hover();
  await tasks.addDueDate('Second Task').click();
  await tasks.chooseDate('12').click();
  await page.pause();

});