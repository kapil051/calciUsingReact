
   export function Calci(){
       return (
          <>
              <input type="text" id="input1" placeholder="Enter first number"/> <br />
              <input type="text" id="input2" placeholder="Enter second number"/> <br />
                  <button id="result">final result</button> <br />
                 <button onClick={findAdd} >Add</button> <br />
                  <button onClick={findSubtract} >Subtract</button> <br />
                 <button onClick={findMultiply} >Multiply</button> <br />
                 <button onClick={findDivide} >Divide</button> <br />
                 <button onClick={findModulo} >Modulo</button>  <br />
          </>
       )
   }

      function findAdd(){


        
            let input1=document.getElementById("input1").value;
            let input2=document.getElementById("input2").value;  

               
              try{
                   fetch("http://localhost:3000/add?a="+input1+"&b="+input2)
                   .then(async(res)=>{
                       const fd=await res.json();
                       document.getElementById("result").innerHTML=fd;
                        // alert(fd);
                   })
                     
              }catch(e){
                    alert(e);
              }
      }

     function findSubtract(){

           let i1=document.getElementById("input1").value;
           let i2=document.getElementById("input2").value;

              try{

                   fetch("http://localhost:3000/subtract?a="+i1+"&b="+i2)
                   .then(async(res)=>{
                        let data=  await res.json();
                        document.getElementById("result").innerHTML=data;
                   })

              }catch(e){
                    alert(e);
              }
     }
     function findMultiply(){

        let i1=document.getElementById("input1").value;
        let i2=document.getElementById("input2").value;

           try{

                fetch("http://localhost:3000/multiply?a="+i1+"&b="+i2)
                .then(async(res)=>{
                     let data=  await res.json();
                     document.getElementById("result").innerHTML=data;
                })

           }catch(e){
                 alert(e);
           }

     }
     function findDivide(){

        let i1=document.getElementById("input1").value;
        let i2=document.getElementById("input2").value;

           try{

                fetch("http://localhost:3000/divide?a="+i1+"&b="+i2)
                .then(async(res)=>{
                     let data=  await res.json();
                     document.getElementById("result").innerHTML=data;
                })

           }catch(e){
                 alert(e);
           }

     }
     function findModulo(){

        let i1=document.getElementById("input1").value;
        let i2=document.getElementById("input2").value;

           try{

                fetch("http://localhost:3000/modulo?a="+i1+"&b="+i2)
                .then(async(res)=>{
                     let data=  await res.json();
                     document.getElementById("result").innerHTML=data;
                })

           }catch(e){
                 alert(e);
           }

     }