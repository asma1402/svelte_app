<script>
	import Router from 'svelte-spa-router';
	import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
	import LoginPage from './lib/pages/login/LoginPage.svelte';
  import AboutPage from './lib/pages/about/AboutPage.svelte';
  import RegisterPage from './lib/pages/register/RegisterPage.svelte';
  import HomePage from './lib/pages/gpt/HomePage.svelte';
  import Error404Page from './lib/pages/errors/Error404Page.svelte';
  import ArticlesHistoryTable from './lib/pages/history/ArticlesHistoryTable.svelte';

  const routes = {
    '/': LoginPage,
    '/about': AboutPage,
    '/register': RegisterPage,
    '/gpt': HomePage,
    '/search-history': ArticlesHistoryTable,

    '*': Error404Page,
}
</script>
<main>
  <Header/>
  <Footer/>
</main>

<Router routes={routes} />