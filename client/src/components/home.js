import ImageSlider from './ImageSlider'
import { Button } from '../styles';
import { Link } from "react-router-dom";
const Home = () => {

	const slides =[
		{url: "https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/SS-KH_power-drill-buying-guide-HRO.jpg"},
		{url: "https://images.gessato.com/w:auto/h:auto/q:mauto/f:avif/https://shop.gessato.com/wp-content/uploads/2016/10/wohngeist-tool-set-gessato-pd.png"},
		{url: "http://steelwd.com/resources/images/products/hardware-album2.jpg"},
		{url: "http://www.kuzimba.com/wp-content/uploads/2021/04/doors.jpg"},
		{url: "https://cdn.shopify.com/s/files/1/0272/4816/4909/products/Woods_8f3cc29a-d06a-49b2-a8c8-052f8e0213c8.jpg?v=1616474657"},
		{url: "https://www.architecturalrecord.com/ext/resources/Issues/2020/05-May/New-Hardware-Products-for-Spring-2020.jpg?t=1588357839&width=696"},
		{url: "https://s3.amazonaws.com/chapman-img/images/doors/chapman-windows-doors-door-hardware_001.jpg"},
		{url: "https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/SS-KH_power-drill-buying-guide-HRO.jpg"},
		{url: "https://media.istockphoto.com/id/596042932/photo/set-of-hand-various-work-tools-on-grey-background.jpg?s=612x612&w=0&k=20&c=Tpz6mmcCZs_tVPd_yq0lmDvPqkvp0Zo5XMWpICP6rZk="},
		{url: "https://images.squarespace-cdn.com/content/v1/5801158546c3c4db81493121/1529339024645-N6O74FOQECL5M9P8UZMU/10517458_10152228285783601_7993843600905978001_n.png?format=2500w"},
		{url: "https://thumbs.dreamstime.com/b/department-construction-electric-tools-various-manufacturers-minsk-belarus-may-hand-held-power-tools-shelf-store-247853873.jpg"}
	]

	const containerStyles = {
		width: '800px',
		height: '450px',
		margin: '0 auto'
	}

	const textStyle = {
		margin: '0 auto',
		textAlign: 'center'
	}
return(
<div >
	<div style={textStyle}>
		<h1>MM FRANCHISE</h1>
	</div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
	<div style={textStyle}>
		<h1 >
			LET'S KEEP TRACK
		</h1>
		<p>Helps manage and keep track of products in store</p>

		<Button as={Link} to="/products">Products</Button>
	</div>

</div>
  );
};

export default Home;