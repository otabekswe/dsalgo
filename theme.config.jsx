export default {
    logo: <span><b>DSA.UZ</b></span>,
    // project: {
    //   link: 'https://github.com/otabeknurmatov/dsa_uz',
    // },
    // banner: {
    //   text: "Hello->"
    // },
    docsRepositoryBase: "https://github.com/otabeknurmatov/dsa_uz",
    feedback: {
      content: "Feedback",
      labels: {
        title: "Xatolik",
        labels: "feedback",
      }
    },
    editLink: {
      text: ""
    },
    useNextSeoProps() {
      return {
        titleTemplate: '%s'
      }
    },
    footer: {
      text: <span style={{textAlign: 'center', display: 'block', width: '100%'}}>
        © 2023 | dsa.uz
      </span>,
    }
    
    // ...
  }