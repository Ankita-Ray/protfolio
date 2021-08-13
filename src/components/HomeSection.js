import { Container } from 'react-bootstrap';
// import WomanImage from './HomeImage';

export default function Animation() {
     
    return (
        <Container fluid className='container'
         >

            <div  className="row" >{/* style={{backgroundColor:"red"}}style={{backgroundColor:"blue"}},height:"100vh" backgroundColor:"green",style={{backgroundColor:"pink"}}style={{backgroundColor:"yellow"}} */}
                            
                <div className="col-lg-8 d-flex align-items-center justify-content-start" >
                    
                    <div className="row d-flex align-items-center " style={{borderLeftWidth:5,borderLeftColor:'#c6c4ef',borderLeftStyle:"solid",paddingLeft:50,paddingBottom:10}}>
                        
                        <div className="animated zoomInDown ease-out-quad" style={{ fontSize:45,fontWeight:"bold",}}>
                                    <span className="animated zoomInDown ease-out-quad"  style={{ color: "grey" }}>Llorem, Is sa </span>  <span  style={{ color: "#c6c4ef" }}>&nbsp;Sscddas hoyey </span><span  style={{ color: "#c6c4ef" }}>.</span>
                        </div>

                        <div className="animated zoomInDown ease-out-quad">
                                    <span  style={{ color: "grey",fontSize:20,fontWeight:700}}>Fa dfhseLoremd </span>  <span style={{ color: "grey",fontSize:20,fontWeight:700 }}>&nbsp;Wefccm Koplsdp .</span> 
                        </div>
                        
                        <div className="animated fadeInUp ease-out-circ" style={{marginTop:30 ,fontSize: 25,fontWeight:"bold",borderBlockStartColor:"grey",borderBlockStartWidth:5 }} >
                                <span className="read-more js-read-more" data-btn-class="read-more__btn js-tab-focus" data-ellipsis="off" style={{ color: "grey" }}> Lorem ista ni mure </span> <span style={{ color: "grey" }}>&nbsp;Pjdsindcnkn</span><span  style={{ color: "#c6c4ef" }}>&nbsp;.</span>
                        </div>

                    </div>
                    
                
                </div>

                {/* <div className="col-lg-4  d-flex justify-content-lg-end justify-content-lg-center align-items-center" style={{maxHeight: '100vh'}} >
                    <WomanImage />
                </div> */}
                            
            </div>
               
        </Container>
        
        // <Container fluid
        //     // style={{ height: "100vh", position: 'relative', backgroundPosition: "fixed", marginBottom: 600 }}
        // >

        //     <div className="row">{/* style={{backgroundColor:"red"}}style={{backgroundColor:"blue"}},height:"100vh" backgroundColor:"green",style={{backgroundColor:"pink"}}style={{backgroundColor:"yellow"}} */}
                            
        //         <div className="col-lg-8 d-flex align-items-center justify-content-start" >
                    
        //             <div className="row d-flex align-items-center " style={{borderLeftWidth:5,borderLeftColor:'#c6c4ef',borderLeftStyle:"solid",paddingLeft:50,paddingBottom:10}}>
                        
        //                 <div className="animated zoomInDown ease-out-quad" style={{ fontSize:45,fontWeight:"bold",}}>
        //                             <span className="animated zoomInDown ease-out-quad"  style={{ color: "grey" }}>Llorem, Is sa </span>  <span  style={{ color: "#c6c4ef" }}>&nbsp;Sscddas hoyey </span><span  style={{ color: "#c6c4ef" }}>.</span>
        //                 </div>

        //                 <div className="animated zoomInDown ease-out-quad">
        //                             <span  style={{ color: "grey",fontSize:20,fontWeight:700}}>Fa dfhseLoremd </span>  <span style={{ color: "grey",fontSize:20,fontWeight:700 }}>&nbsp;Wefccm Koplsdp .</span> 
        //                 </div>
                        
        //                 <div className="animated fadeInUp ease-out-circ" style={{marginTop:30 ,fontSize: 25,fontWeight:"bold",borderBlockStartColor:"grey",borderBlockStartWidth:5 }} >
        //                         <span className="read-more js-read-more" data-btn-class="read-more__btn js-tab-focus" data-ellipsis="off" style={{ color: "grey" }}> Lorem ista ni mure </span> <span style={{ color: "grey" }}>&nbsp;Pjdsindcnkn</span><span  style={{ color: "#c6c4ef" }}>&nbsp;.</span>
        //                 </div>

        //             </div>
                    
                
        //         </div>

        //         <div className="col-lg-4  d-flex justify-content-lg-end justify-content-lg-center align-items-center" style={{maxHeight: '100vh'}} >
        //             <WomanImage />
        //         </div>
                            
        //     </div>
               
        // </Container>
        
        )
}
