var firebaseConfig = {
    apiKey: "AIzaSyBNl3rAnIA-MmHLMeMslqB_gcPMjtnx2mQ",
    authDomain: "smartbrta-66cd2.firebaseapp.com",
    databaseURL: "https://smartbrta-66cd2.firebaseio.com",
    projectId: "smartbrta-66cd2",
    storageBucket: "smartbrta-66cd2.appspot.com",
    messagingSenderId: "896106218207",
    appId: "1:896106218207:web:601984286312e06a685f6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function readTask() {
    var task = firebase.database().ref("Owners/");
    task.on("child_added", function(data) {
        var taskValue = data.val();
        document.getElementById("cardSection").innerHTML+=`
        <div class = "card mb-3">
        <div class = "card-body">
         <p class ="card-title">${taskValue.name}</p>
         <p class = "card-text">Reg Num: ${taskValue.reg}</p>
         <p class = "card-text">Vehicle: ${taskValue.vehicle}</p>
         <button type="submit" style="color: white" class="btn btn-warning"
         onclick = "moreInfo(${taskValue.name}, '${taskValue.gender}','${taskValue.reg}','${taskValue.vehicle}','${taskValue.email}','${taskValue.mobile}','${taskValue.address}')">More Info</button>
         </div>
        </div>`  
    });   
}

function getdata(){

    var rootRef = firebase.database().ref('Owners/');
    var user = document.getElementById("user").value;

    rootRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
        r = child.val().reg;
        n = child.val().name;
        v = child.val().vehicle;
        d = child.val().district;
        m = child.val().mobile;
        
        if (r==user) {  
            document.getElementById("cardSection").innerHTML='';
            document.getElementById("cardSection2").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h5 class ="card-title">${child.val().name}</h5>
            <p class = "card-text">Reg Num: ${child.val().reg}</p>
            <p class = "card-text">Vehicle: ${child.val().vehicle}</p>
            <button type="submit" style="color: white" class="btn btn-warning"onclick = "">More Info</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection2").innerHTML='';
                readTask();
            });
        }

        else if (n==user) {  
            document.getElementById("cardSection").innerHTML='';
            document.getElementById("cardSection2").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h5 class ="card-title">${child.val().name}</h5>
            <p class = "card-text">Reg Num: ${child.val().reg}</p>
            <p class = "card-text">Vehicle: ${child.val().vehicle}</p>
            <button type="submit" style="color: white" class="btn btn-warning"onclick = "">More Info</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection2").innerHTML='';
                readTask();
            });
        }

        else if (v==user) {  
            document.getElementById("cardSection").innerHTML='';
            document.getElementById("cardSection2").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h5 class ="card-title">${child.val().name}</h5>
            <p class = "card-text">Reg Num: ${child.val().reg}</p>
            <p class = "card-text">Vehicle: ${child.val().vehicle}</p>
            <button type="submit" style="color: white" class="btn btn-warning"onclick = "">More Info</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection2").innerHTML='';
                readTask();
            });
        }

        else if (d==user) {  
            document.getElementById("cardSection").innerHTML='';
            document.getElementById("cardSection2").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h5 class ="card-title">${child.val().name}</h5>
            <p class = "card-text">Reg Num: ${child.val().reg}</p>
            <p class = "card-text">Vehicle: ${child.val().vehicle}</p>
            <button type="submit" style="color: white" class="btn btn-warning"onclick = "">More Info</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection2").innerHTML='';
                readTask();
            });
        }

        else if (m==user) {  
            document.getElementById("cardSection").innerHTML='';
            document.getElementById("cardSection2").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h5 class ="card-title">${child.val().name}</h5>
            <p class = "card-text">Reg Num: ${child.val().reg}</p>
            <p class = "card-text">Vehicle: ${child.val().vehicle}</p>
            <button type="submit" style="color: white" class="btn btn-warning"onclick = "">More Info</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection2").innerHTML='';
                readTask();
            });
        }

        else if (r=='') {
            document.getElementById("nf").innerHTML='Not Found';
        }
        });
  });
}

document.getElementById("form").addEventListener('submit', (e) =>{
    var name = document.getElementById("pname").value;
    var email = document.getElementById("pemail").value;
    var pid = document.getElementById("pid").value;
    var area = document.getElementById("parea").value;
    var pass = area+pid;

    e.preventDefault();
    form.reset();
    createTask(name,email,pid,area,pass); 
});

function createTask(name,email,pid,area,pass) {  
    firebase.auth().createUserWithEmailAndPassword(email,pass)
    .then(function(response){
            var x = firebase.auth().currentUser.uid;
            var e = firebase.auth().currentUser.email;
            //console.log(response);
            //console.log('Success');
            var task={
                name: name,
                email: e,
                pid: pid,
                uid: x,
                area: area               
            }
            let db = firebase.database().ref("Police/"+x);
            db.set(task);
            firebase.auth().signOut();
            document.getElementById("cardSection3").innerHTML='';
            readTask2();
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log(errorCode);
        //console.log(errorMessage);
    });
}

function readTask2() {
    var task = firebase.database().ref("Police/");
    task.on("child_added", function(data) {
        var taskValue = data.val();
        document.getElementById("cardSection3").innerHTML+=`
        <div class = "card mb-3">
        <div class = "card-body">
         <h6 class ="card-title">${taskValue.name}</h6>
         <p class = "card-text">Police ID: ${taskValue.pid}</p>
         <p class = "card-text">Email: ${taskValue.email}</p>
         <p class = "card-text">Area: ${taskValue.area}</p>
         <button type="submit" style="color: white" class="btn btn-warning"
         onclick = "updateTask('${taskValue.name}','${taskValue.email}','${taskValue.pid}','${taskValue.area}', '${taskValue.uid}')">Change Area</button>
         <button class="btn btn-danger" onclick = "deleteTask('${taskValue.uid}')">Delete Profile</button>
         </div>
        </div>` 
    }); 
}

function reset() {
    document.getElementById("firstSection2").innerHTML= `
    
    <form class="border p-4 mb-4" id="form">

        <div class="form-group">
            <label>Name</label>
                <input type="text" class="form-control" id="pname" placeholder="Enter name">
                    </div>
                      <div class="form-group">
                          <label>Police ID</label>
                          <input type="text" class="form-control" id="pid" placeholder="Enter id">
                      </div>
                      <div class="form-group">
                        <label>Area</label>
                        <input type="text" class="form-control" id="parea" placeholder="Enter area">
                      </div>
                      <button type="submit" id="button1" class="btn btn-primary">Add</button>
                      <button style="display: none;" id="button2" class="btn-btn-success">Update</button>
                      <button style="display: none;" id="button3" class="btn btn-danger">Cancel</button>

    </form>
       
    `;

    document.getElementById("form").addEventListener('submit', (e) =>{
        var name = document.getElementById("pname").value;
        var email = document.getElementById("pemail").value;
        var pid = document.getElementById("pid").value;
        var area = document.getElementById("parea").value;
        var pass = area+pid;
    
        e.preventDefault();
        form.reset();
        createTask(name,email,pid,area,pass); 
    });
}

function updateTask2(name,email,pid,area,uid){
    var taskUpdate={
        name: name,
        email: email,
        pid: pid,
        uid: uid,
        area: area               
    }
    let db = firebase.database().ref("Police/"+uid);
    db.set(taskUpdate);

    document.getElementById("cardSection3").innerHTML='';
    readTask2();
    reset();
}


function updateTask(name,email,pid,area,uid) {
    document.getElementById("firstSection2").innerHTML=`
    <form class="border p-4 mb-4" id="form5">

                      <div class="form-group">
                          <label>Name</label>
                          <input type="text" class="form-control" id="pname" readonly>
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" id="pemail" readonly>
                      </div>
                      <div class="form-group">
                          <label>Police ID</label>
                          <input type="text" class="form-control" id="pid" readonly>
                      </div>
                      <div class="form-group">
                        <label>Area</label>
                        <input type="text" class="form-control" id="parea">
                      </div>

                      <div class="form-group" style="display: none;">
                        <label>UID</label>
                        <input type="text" class="form-control" id="uid">
                      </div>
  
                      <button style="display: none;" id="button1" class="btn btn-primary">Add Task</button>
    <button type ="submit" style="display: inline-block;" id="button2" class="btn btn-success">Update</button>
    <button style="display: inline-block;" id="button3" class="btn btn-danger">Cancel</button>
                  </form>
    `;
    document.getElementById("form5").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    document.getElementById("button3").addEventListener("click", (e) => {
        reset();
    });

    document.getElementById("button2").addEventListener("click", (e) => {
        updateTask2(document.getElementById("pname").value, document.getElementById("pemail").value, document.getElementById("pid").value, document.getElementById("parea").value,document.getElementById("uid").value);
    });

    document.getElementById("pname").value=name;
    document.getElementById("pemail").value=email;
    document.getElementById("pid").value=pid;
    document.getElementById("parea").value=area;
    document.getElementById("uid").value=uid;
}

function deleteTask(uid){
    var task = firebase.database().ref("Police/"+uid);
    task.remove();
    reset();
    document.getElementById("cardSection3").innerHTML='';
    readTask2();
}

function getdata2(){

    var rootRef = firebase.database().ref('Police/');
    var user = document.getElementById("user2").value;

    rootRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
        r = child.val().pid;
        n = child.val().name;
        e = child.val().email;
        a = child.val().area;
        
        if (r==user) {
            
            document.getElementById("cardSection3").innerHTML='';
            document.getElementById("cardSection6").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h6 class ="card-title">${child.val().name}</h6>
            <p class = "card-text">Police ID: ${child.val().pid}</p>
            <p class = "card-text">Email: ${child.val().email}</p>
             <p class = "card-text">Area: ${child.val().area}</p>
            <button type="submit" style="color: white" class="btn btn-warning"
            onclick = "updateTask('${child.val().name}','${child.val().email}','${child.val().pid}','${child.val().area}', '${child.val().uid}')">Change Area</button>
            <button class="btn btn-danger" onclick = "deleteTask('${child.val().uid}')">Delete Profile</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection6").innerHTML='';
                readTask2();
            });
        }

        else if (n==user) {
            
            document.getElementById("cardSection3").innerHTML='';
            document.getElementById("cardSection6").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h6 class ="card-title">${child.val().name}</h6>
            <p class = "card-text">Police ID: ${child.val().pid}</p>
            <p class = "card-text">Email: ${child.val().email}</p>
             <p class = "card-text">Area: ${child.val().area}</p>
            <button type="submit" style="color: white" class="btn btn-warning"
            onclick = "updateTask('${child.val().name}','${child.val().email}','${child.val().pid}','${child.val().area}', '${child.val().uid}')">Change Area</button>
            <button class="btn btn-danger" onclick = "deleteTask('${child.val().uid}')">Delete Profile</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection6").innerHTML='';
                readTask2();
            });
        }

        else if (e==user) {
            
            document.getElementById("cardSection3").innerHTML='';
            document.getElementById("cardSection6").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h6 class ="card-title">${child.val().name}</h6>
            <p class = "card-text">Police ID: ${child.val().pid}</p>
            <p class = "card-text">Email: ${child.val().email}</p>
             <p class = "card-text">Area: ${child.val().area}</p>
            <button type="submit" style="color: white" class="btn btn-warning"
            onclick = "updateTask('${child.val().name}','${child.val().email}','${child.val().pid}','${child.val().area}', '${child.val().uid}')">Change Area</button>
            <button class="btn btn-danger" onclick = "deleteTask('${child.val().uid}')">Delete Profile</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection6").innerHTML='';
                readTask2();
            });
        }

        else if (a==user) {
            
            document.getElementById("cardSection3").innerHTML='';
            document.getElementById("cardSection6").innerHTML+=`
            <div class = "card mb-3">
            <div class = "card-body">
            <div class="resume-date text-md-right">
            <span id="ca" class="text-primary"><i class="fas fa-times"></i></span>
            </div>
            <h6 class ="card-title">${child.val().name}</h6>
            <p class = "card-text">Police ID: ${child.val().pid}</p>
            <p class = "card-text">Email: ${child.val().email}</p>
             <p class = "card-text">Area: ${child.val().area}</p>
            <button type="submit" style="color: white" class="btn btn-warning"
            onclick = "updateTask('${child.val().name}','${child.val().email}','${child.val().pid}','${child.val().area}', '${child.val().uid}')">Change Area</button>
            <button class="btn btn-danger" onclick = "deleteTask('${child.val().uid}')">Delete Profile</button>
            </div>
            </div>`;
            document.getElementById("nf").innerHTML='';
            document.getElementById("ca").addEventListener("click", (e) => {
                document.getElementById("cardSection6").innerHTML='';
                readTask2();
            });
        }

        else if (r!=user) {
            //document.getElementById("nf").innerHTML='Not Found';
        }
        });
  });
}