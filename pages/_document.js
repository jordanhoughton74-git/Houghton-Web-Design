import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head />
        <body>
            <script>0</script>
          <Main />
          <NextScript />
          <script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument