import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/site';
export default function SEO({title,description,path=''}:{title:string;description:string;path?:string}){
 const url=`https://www.solutionshouston.com${path}`;
 return <Helmet>
  <title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={url}/>
  <meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/><meta property="og:url" content={url}/>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness",name:siteConfig.companyName,telephone:siteConfig.phone,email:siteConfig.email,areaServed:siteConfig.serviceAreas.map(name=>({"@type":"City",name})),url:'https://www.solutionshouston.com'})}</script>
 </Helmet>
}
