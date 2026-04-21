const Map = () => {
  return (
    <>
    <div className="sections" id="about_people">
      <h2>Locate Us</h2>
      
      <div className="text-center">
        <p>We’re here to help! Use the map below to find our headquarters. Our team is ready to assist you with any inquiries or support you may need.</p>
      </div>
    </div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.775282868346!2d7.46517757352939!3d9.11110248770141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b5efa0edd2f%3A0xe67b87f9008e3f5b!2sFestrut%20Group!5e1!3m2!1sen!2sng!4v1773269214802!5m2!1sen!2sng"
      width="100%" 
      height="800" 
      style={{ border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
    </>
  )
}
export default Map;