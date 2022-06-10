import Head from "next/head";
import Router from 'next/router';
const Layout= ({ children, title , data}) => {
  Router.onRouteChangeComplete = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={data?.meta_title} />
        <meta name="description" content={data?.meta_description} />
        <meta name="keywords" content={data?.meta_keywords} />
        <meta property="og:image" content={data?.meta_image} />
        <meta type="image/jpeg" name="link" href={data?.meta_image} />
        
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?fami  ly=Material+Icons"
        />
        <script
            dangerouslySetInnerHTML={{
              __html: `
              window.replainSettings = { id: '4ebb5ca8-1dcf-408e-a5f6-fe90ed66ab85' };
              (function(u){var s=document.createElement('script');s.async=true;s.src=u;
              var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
              })('https://widget.replain.cc/dist/client.js');
                  `,
            }}
          ></script>
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
