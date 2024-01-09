
   export function Calci(){
       return (
          <>
              <input type="text" id="input1" placeholder="Enter first number"/> <br />
              <input type="text" id="input2" placeholder="Enter second number"/> <br />
                  <button id="result">final result</button> <br />
                 <button onClick={findAdd} >Add</button>
                 {/* <button onClick={findSubtract} >Subtract</button>
                 <button onClick={findMultiply} >Multiply</button>
                 <button onClick={findDivide} >Divide</button>
                 <button onClick={findModulo} >Modulo</button> */}
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