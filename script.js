fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);

    document.getElementById("profileImage").setAttribute
    ("src",data[0].avatar_url);

    document.getElementById("username").innerText = data [0].login;

    document.getElementById("visitprofile").setAttribute("href",data[0].html_url);

    //-------------------------------------------------

    document.getElementById("profileImage1").setAttribute
    ("src",data[1].avatar_url);

    document.getElementById("username1").innerText = data [1].login;

    document.getElementById("visitprofile1").setAttribute("href",data[1].html_url);
  //-------------------------------------------------------- 
    document.getElementById("profileImage2").setAttribute
    ("src",data[2].avatar_url);

    document.getElementById("username2").innerText = data [2].login;

    document.getElementById("visitprofile2").setAttribute("href",data[2].html_url);
    //----------------------------------------------------------
    document.getElementById("profileImage3").setAttribute
    ("src",data[3].avatar_url);

    document.getElementById("username3").innerText = data [3].login;

    document.getElementById("visitprofile3").setAttribute("href",data[3].html_url);
    //---------------------------------------------------------------
    document.getElementById("profileImage4").setAttribute
    ("src",data[4].avatar_url);

    document.getElementById("username4").innerText = data [4].login;

    document.getElementById("visitprofile4").setAttribute("href",data[4].html_url);
    //----------------------------------------------------
    document.getElementById("profileImage5").setAttribute
    ("src",data[5].avatar_url);

    document.getElementById("username5").innerText = data [5].login;

    document.getElementById("visitprofile5").setAttribute("href",data[5].html_url);

    //-------------------------------------------------

    document.getElementById("profileImage6").setAttribute
    ("src",data[6].avatar_url);

    document.getElementById("username6").innerText = data [6].login;

    document.getElementById("visitprofile6").setAttribute("href",data[6].html_url);
  //-------------------------------------------------------- 
    document.getElementById("profileImage7").setAttribute
    ("src",data[7].avatar_url);

    document.getElementById("username7").innerText = data [7].login;

    document.getElementById("visitprofile7").setAttribute("href",data[7].html_url);
    //----------------------------------------------------------
    document.getElementById("profileImage8").setAttribute
    ("src",data[8].avatar_url);

    document.getElementById("username8").innerText = data [8].login;

    document.getElementById("visitprofile8").setAttribute("href",data[8].html_url);
    //---------------------------------------------------------------
    document.getElementById("profileImage9").setAttribute
    ("src",data[9].avatar_url);

    document.getElementById("username9").innerText = data [9].login;

    document.getElementById("visitprofile9").setAttribute("href",data[9].html_url);

})
