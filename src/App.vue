<template>
  <Header />
  <Projects />
  <Advantages />
  <Catalog />
  <Contacts />
  <Footer />
  <Totop />
</template>

<script>
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Advantages from '@/components/Advantages'
import Catalog from '@/components/Catalog'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import Totop from '@/components/Totop'

export default {
  components: {
    Header,
    Projects,
    Advantages,
    Catalog,
    Contacts,
    Footer,
    Totop,
  },
}
</script>