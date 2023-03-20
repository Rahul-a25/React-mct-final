import React, { useEffect, useState } from 'react'
import './User.css'
import Navbar from './Navbar'



const User = () => {
    const [gender, setgender] = useState("all")
    const [Udata, setUdata] = useState([])
    function hello(e){
        setgender(e.target.value)
        console.log(gender);
        console.log(Udata);

    }
    useEffect(()=>{
      getData();
    },[gender])
    async function getData(){
        const res=await fetch(`https://randomuser.me/api/?results=30`)
        const data= await res.json();
        console.log(Udata);
        if(gender==="male" || gender==="female"){   
        const filtereddata=data.results.filter((e)=>e.gender===gender)
        setUdata(filtereddata);
    }
    else if(gender==="all"){
        setUdata(data.results)
        console.log(Udata);
        console.log("elseif");
    }
   

    }
  return (
    <>
        <Navbar/>
    <div className='user container center col '>
        <div className="contentwala">
    <div className="userHead  "><h2>User Details</h2></div>
    <div className="desc ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo delectus odit voluptate enim quas debitis, illum doloribus inventore quo, nam praesentium, iste autem dolor. Tenetur debitis eveniet quia aliquid.
    Assumenda, illo dolore quos consectetur veniam asperiores ad perferendis, numquam sapiente quibusdam quo fugiat reprehenderit quisquam nemo itaque, sequi a magnam laudantium dicta amet? Quo, ducimus blanditiis. Corporis, reprehenderit atque.
    Ab nostrum dicta aut optio iusto animi lae dignissimos incidunt commodi aliquid nemo, exercitationem autem minus tempora non corporis maxime excepturi corrupti vero blanditiis eveniet dolore quasi possimus distinctio. Perspiciatis.</div></div>
    <div className="inputsRadio " onChange={(e)=>hello(e)}>
    <span><input type="radio" name="gender" id="" value="all" defaultChecked />
        All</span>
        <span>
        <input type="radio" name="gender" value="female" id="" />
        Female</span>
        <span>
        <input type="radio" name="gender" value="male" id="" />
       Male</span>
    </div>
    <div className="tablewala">
          <table style={{ width:"90%",margin:"20px 40px",padding:"10px"}}>
             <thead style={{backgroundColor:"black"}} >
                 <tr>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th> Gender</th>
                 </tr>
             </thead>
             <tbody className='tablebody'>
                 {
                 Udata.length>1?(Udata.map((e)=>(
                    <>
                    <tr style={{margin:"20px 0px"}}>
                            <td width={150}><img style={{margin:"20px 0px"}} width={150} height={100} src={e.picture.large} alt="" /></td>
                            <td style={{marginLeft:"20px"}}>
                               <span >{e.name.first}</span> </td>
                            <td> <span>{e.email}</span> </td>
                            <td><span>{e.gender}</span></td>
                        </tr>
                        </>
               )
        )):null}   
            </tbody>
          </table>
      </div>
       
    </div>
    </>
  )
}

export default User

// const User = () => {
//     const [Find,SetFind]=useState("")
//     const[Udata,SetItem]=useState([])
    
//         console.log(Item);
//         useEffect(() => {
//           fetch("https://randomuser.me/api/?results=20")
//         .then((res) => res.json())
//         .then((data) => SetItem(data.results));
//         }, [])
//         const allwala=()=>{
//           SetItem(Item)
//         }
       
//     const femalewala=(femaleitem)=>{
//      const updateditemfemale = Item.filter((curele)=>{
//       return curele.gender=== femaleitem;
//      })
//      SetItem(updateditemfemale );
//     }

//     const malewala=(maleitem)=>{
//       const updateditemmale = Item.filter((curele)=>{
//        return curele.gender=== maleitem;
//       })
//       SetItem(updateditemmale );
//      }


                       // updated

//     const User = () => {
//     const [gender, setgender] = useState("all")
//     const [Item, setItem] = useState([])
//     function hello(e){
//         setgender(e.target.value)
//         console.log(gender);
//         console.log(Item);

//     }
//     useEffect(()=>{
//       getData();
//     },[gender])
//     async function getData(){
//         const res=await fetch(`https://randomuser.me/api/?results=30`)
//         const data= await res.json();
//         console.log(Item);
//         if(gender==="male" || gender==="female"){   
//         const filtereddata=data.results.filter((e)=>e.gender===gender)
//         setItem(filtereddata);
//     }
//     else if(gender==="all"){
//         setItem(data.results)
//         console.log(Item);
//         console.log("elseif");
//     }
// }
   


   
//   return (
//     <>
//     <Navbar/>
//         <div className='contentuper'>
//       <h2>User Details</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis obcaecati nostrum ratione harum veritatis aut explicabo culpa molestiae numquam dicta officia cum vitae commodi minus voluptatem, tenetur odio repellat, molestias magnam, similique dolore quia adipisci. Ipsam magni iusto veritatis eveniet maxime! In accusantium tempora perferendis suscipit natus repellendus sunt sapiente aut dolores, ea sed, veritatis quibusdam facere illum aspernatur voluptatem? Illum quae molestiae, animi placeat expedita repudiandae nulla voluptates vero debitis dolores adipisci ipsam magnam pariatur eveniet praesentium illo voluptate enim magni tempora sunt sed explicabo provident odio perspiciatis. Nesciunt illo obcaecati molestiae reprehenderit ullam culpa, ea aperiam tenetur officia?</p>
//       </div>
//       <div className='radiowala'>
//          <div className='same'>
//          {/* SetItem(Item) */}
//          <input onClick={()=>allwala} name="gender" type="radio"/>
//            <label htmlFor="">All</label>
//          </div>

//          <div className="same">
        
// onClick={()=>malewala('male')}

//          <input  name="gender"  value="male" type="radio"/>
//            <label htmlFor="">Male</label>
//          </div>
//          <div className="same">
                          
// onClick={()=>femalewala('female')} 

//          <input  name="gender" value="female"  type="radio"/>
//            <label htmlFor="">Female</label>
//          </div> 
//       </div>

//       <div className="tablewala">
//           <table style={{ width:"90%",margin:"20px 40px",padding:"10px"}}>
//             <thead style={{backgroundColor:"black"}} >
//                 <tr>
//                     <th>Image</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th> Gender</th>
//                 </tr>
//             </thead>
//             <tbody className='tablebody'>
//                 {
//                  Item.length>1?(Item.map((e)=>(
//                     <>
//                     <tr style={{margin:"20px 0px"}}>
//                             <td width={150}><img style={{margin:"20px 0px"}} width={150} height={100} src={e.picture.large} alt="" /></td>
//                             <td style={{marginLeft:"20px"}}>
//                                <span >{e.name.first}</span> </td>
//                             <td> <span>{e.email}</span> </td>
//                             <td><span>{e.gender}</span></td>
//                         </tr>
//                         </>
//                )
//         )):null}   
//             </tbody>
//           </table>
//       </div>
//     </>
//   )
// }

// export default User;





// import React, { useEffect, useState } from 'react'
// import Navbar from './Navbar'
// import "./User.css"

// const User = () => {
//     const [gender, setgender] = useState("all")
//     const [Udata, setUdata] = useState([])
//     function hello(e){
//         setgender(e.target.value)
//         console.log(gender);
//         console.log(Udata);

//     }
//     useEffect(()=>{
//       getData();
//     },[gender])
//     async function getData(){
//         const res=await fetch(`https://randomuser.me/api/?results=30`)
//         const data= await res.json();
//         console.log(Udata);
//         if(gender==="male" || gender==="female"){   
//         const filtereddata=data.results.filter((e)=>e.gender===gender)
//         setUdata(filtereddata);
//     }
//     else if(gender==="all"){
//         setUdata(data.results)
//         console.log(Udata);
//         console.log("elseif");
//     }
   

//     }
//   return (
//     <>
//         <Navbar/>
//     <div className='user container center col '>
//     <div className="userHead  "><h2>User Details</h2></div>
//     <div className="desc ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo delectus odit voluptate enim quas debitis, illum doloribus inventore quo, nam praesentium, iste autem dolor. Tenetur debitis eveniet quia aliquid.
//     Assumenda, illo dolore quos consectetur veniam asperiores ad perferendis, numquam sapiente quibusdam quo fugiat reprehenderit quisquam nemo itaque, sequi a magnam laudantium dicta amet? Quo, ducimus blanditiis. Corporis, reprehenderit atque.
//     Ab nostrum dicta aut optio iusto animi lae dignissimos incidunt commodi aliquid nemo, exercitationem autem minus tempora non corporis maxime excepturi corrupti vero blanditiis eveniet dolore quasi possimus distinctio. Perspiciatis.</div>
//     <div className="inputsRadio " onChange={(e)=>hello(e)}>
//     <span><input type="radio" name="gender" id="" value="all" defaultChecked />
//         All</span>
//         <span>
//         <input type="radio" name="gender" value="female" id="" />
//         Female</span>
//         <span>
//         <input type="radio" name="gender" value="male" id="" />
//        Male</span>
//     </div>
//     <div className="cardContainer ">
//         <div className="cardHeader ">
//             <div className='img'>IMAGE</div>
//             <div className='name1'>NAME</div>
//             <div className='email'>EMAIL</div>
//             <div className='gender'>GENDER</div>
//         </div>
//         <div className="card1 col">
//         {Udata.length>1?(Udata.map((e,i)=>{
//             return(
//                 <div className='card' key={i}>
//                 <div className='img'>
//             <img src={e.picture.thumbnail} alt="" width={170} />
//         </div>
//             <div className='name1'>{e.name.title} {e.name.first} {e.name.last}</div>
//             <div className='email'>{e.email}</div>
//             <div className='gender'>{e.gender}</div>
//             </div>
//             )
//         })):null}
//         </div>
//     </div>
       
//     </div>
//     </>
//   )
// }

// export default User
