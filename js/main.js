//declearing html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

if (imgDiv) {
    imgDiv.addEventListener('mouseenter', function () {
        uploadBtn.style.display = "block";
    });
}


//if we hover out from img div

imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a foto to upload

file.addEventListener('change', function () {
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);


    }

    console.log(img.src);

});

// upLoad filezip
const myState = document.getElementById("myState");
myState.addEventListener("change", (event) => {
    const { files } = event.target;

    console.log("files", files)
})


// new post


function newpost() {
    location.replace("http://127.0.0.1:5500/boostrap/formLogin/info.html")
    var email = document.getElementById("myEmail").value;
    var password = document.getElementById("myPassword").value;
    var fullname = document.getElementById("myFullname").value;
    var city = document.getElementById("myCity").value;
    var address = document.getElementById("myAddress").value;
    var srcElement=img.src;
    var lists = [
        {
            "email": email,
            "password": password,
            "fullname": fullname,
            "city": city,
            "address": address,
            "images":srcElement
        }
    ]
    localStorage.setItem('lists', JSON.stringify(lists));
    var students =JSON.parse(localStorage.getItem('lists')) 
    var info = document.querySelector("#info");

    if(info) {

        info.innerHTML=`
    
        <h1>jdhbjkf</h1>
        <table>
           <tbody>
           <tr>
                   <td> Họ và tên  </td>
                    <td>  ${students.fullname}   </td>
           </tr>
           <tr>
                   <td> Địa chỉ email   </td>
                   <td>   ${students.email}  </td>
           </tr>
           <tr>
                   <td> Thành phố    </td>
                    <td>  ${students.city}    </td>
           </tr>
           <tr>
                  <td> Địa chỉ   </td>
                      <td>  ${students.address}   </td>
           </tr>
           <tr>
                <td> Mật khẩu </td>
               <td>  ${students.password}   </td>
          </tr>
          </tbody>
        </table>
    
        `
    }


}
let imgElement=document.getElementById('file');

if (imgElement) {
    console.log(imgElement);

}