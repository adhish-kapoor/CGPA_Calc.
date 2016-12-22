function sem()
{
    var v=document.getElementById("semester").value;
    var t=document.getElementById("textin");
    document.getElementById("resin").innerHTML = "";
    if(v==1)
    {
        t.innerHTML="Engineering Graphics & Drafting          ";
        t.innerHTML +='<input type="text" id="a">' + '<br><br>';
        
        t.innerHTML+="Communicative English                    ";
        t.innerHTML += '<input type="text" id="b">' + '<br><br>';
        
        t.innerHTML+="Mathematics-I                            ";
        t.innerHTML += '<input type="text" id="c">' + '<br><br>';
        
        t.innerHTML+="Physics                                  ";
        t.innerHTML += '<input type="text" id="d">' + '<br><br>';
        
        t.innerHTML+="Electrical Engineering                   ";
        t.innerHTML += '<input type="text" id="e">' + '<br><br>';
        
        t.innerHTML+="Punjabi/Mudhli Punjabi                   ";
        t.innerHTML += '<input type="text" id="f">' + '<br><br>';
        }
     if(v==2)
     {
         t.innerHTML  ="FTP Using Python                        ";
         t.innerHTML +='<input type="text" id="a2">' + '<br><br>';
         
         t.innerHTML +="Engineering Chemistry                   ";
         t.innerHTML +='<input type="text" id="b2">' + '<br><br>';
         
         t.innerHTML +="Mathematics II                          ";
         t.innerHTML +='<input type="text" id="c2">' + '<br><br>';
         
         t.innerHTML +="Mechanics                               ";
         t.innerHTML +='<input type="text" id="d2">' + '<br><br>';
        
        t.innerHTML  +="Material Science                        ";
        t.innerHTML  +='<input type="text" id="e2">' + '<br><br>';
        
        t.innerHTML  +="Manufacturing Practices                 ";
        t.innerHTML  +='<input type="text" id="f2">' + '<br><br>';
        
        t.innerHTML  +="Punjabi/Mudhli Punjabi                  ";
        t.innerHTML  +='<input type="text" id="g2">' + '<br><br>';
        
        t.innerHTML  +='<br>' + '<br>';
        t.innerHTML +="SGPA of SEM-I                          ";
        t.innerHTML +='<input type="text" value=NaN id="sg12" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center;">' + '<br><br>';
     }
     if(v==3)
     {
         t.innerHTML="Data Structures                         ";
         t.innerHTML += '<input type="text" id="a3">' + '<br><br>';
         
         t.innerHTML+="Programming in C++                      ";
         t.innerHTML += '<input type="text" id="b3">' + '<br><br>';
         
         t.innerHTML+="Digital Circuits & Logic design         ";
         t.innerHTML += '<input type="text" id="c3">' + '<br><br>';
         
         t.innerHTML+="Written & Oral Technical Communication  ";
         t.innerHTML += '<input type="text" id="d3">' + '<br><br>';
         
         t.innerHTML+="ID Course-I                             ";
         t.innerHTML += '<input type="text" id="e3">' + '<br><br>';
         
         t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                          ";
        t.innerHTML += '<input type="text" id="sg13" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                         ";
        t.innerHTML += '<input type="text" value=NaN id="sg23" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';
     }   
     if(v==4)
     {
         t.innerHTML="Operating System                        ";
         t.innerHTML += '<input type="text" id="a4">' + '<br><br>';
         
         t.innerHTML+="Data Communication                      ";
         t.innerHTML += '<input type="text" id="b4">' + '<br><br>';
         
         t.innerHTML+="System Programming                      ";
         t.innerHTML += '<input type="text" id="c4">' + '<br><br>';
         
         t.innerHTML+="Discrete Structures                     ";
         t.innerHTML += '<input type="text" id="d4">' + '<br><br>';
         
         t.innerHTML+="Computer Architecture                   ";
         t.innerHTML += '<input type="text" id="e4">' + '<br><br>';
         
         t.innerHTML+="ID Course-II                            ";
         t.innerHTML += '<input type="text" id="f4">' + '<br><br>';
         
         t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                          ";
        t.innerHTML += '<input type="text" id="sg14" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                         ";
        t.innerHTML += '<input type="text" id="sg24" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                        ";
        t.innerHTML += '<input type="text" value=NaN id="sg34" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';
     }
     if(v==5)
     {
         t.innerHTML="System Analysis Design                  ";
         t.innerHTML += '<input type="text" id="a5">' + '<br><br>';
         
         t.innerHTML+="Network Operating Systems               ";
         t.innerHTML += '<input type="text" id="b5">' + '<br><br>';
         
         t.innerHTML+="Relational DBMS                         ";
         t.innerHTML += '<input type="text" id="c5">' + '<br><br>';
         
         t.innerHTML+="Design & Analysis of Algorithm          ";
         t.innerHTML += '<input type="text" id="d5">' + '<br><br>';
         
         t.innerHTML+="Computer Graphics                       ";
         t.innerHTML += '<input type="text" id="e5">' + '<br><br>';
         
         t.innerHTML+="Programming Lab-I(RDBMS)                ";
         t.innerHTML += '<input type="text" id="f5">' + '<br><br>';
         
         t.innerHTML+="Programming Lab-II(CG & DAA)            ";
         t.innerHTML += '<input type="text" id="g5">' + '<br><br>';
         
         t.innerHTML+="ID Course-I                             ";
         t.innerHTML += '<input type="text" id="h5">' + '<br><br>';
         
         t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                          ";
        t.innerHTML += '<input type="text" id="sg15" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                         ";
        t.innerHTML += '<input type="text" id="sg25" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                        ";
        t.innerHTML += '<input type="text" id="sg35" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                         ";
        t.innerHTML += '<input type="text" value=NaN id="sg45" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';
     }
     if(v==6)
     {
         t.innerHTML="Object Oriented Analysis & Design       ";
         t.innerHTML += '<input type="text" id="a6">' + '<br><br>';
         
         t.innerHTML+="Software Engineering                    ";
         t.innerHTML += '<input type="text" id="b6">' + '<br><br>';
         
         t.innerHTML+="Object Oriented Programming(JAVA)       ";
         t.innerHTML += '<input type="text" id="c6">' + '<br><br>';
         
         t.innerHTML+="Elective-I                              ";
         t.innerHTML += '<input type="text" id="d6">' + '<br><br>';
         
         t.innerHTML+="Programming Lab-VI(Advanced DBMS)       ";
         t.innerHTML += '<input type="text" id="e6">' + '<br><br>';
         
         t.innerHTML+="ID Course-II                            ";
         t.innerHTML += '<input type="text" id="f6">' + '<br><br>';
         
         t.innerHTML+="ID Course-III                           ";
         t.innerHTML += '<input type="text" id="g6">' + '<br><br>';
         
         t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                          ";
        t.innerHTML += '<input type="text" id="sg16" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                         ";
        t.innerHTML += '<input type="text" id="sg26" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                        ";
        t.innerHTML += '<input type="text" id="sg36" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                         ";
        t.innerHTML += '<input type="text" id="sg46" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-V                          ";
        t.innerHTML += '<input type="text" value=NaN id="sg56" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">';
    }
    if(v==7)
    {
        t.innerHTML="Symbolic Logic & Logic Programming       ";
        t.innerHTML += '<input type="text" id="a7">' + '<br><br>';
        
        t.innerHTML+="Formal Languages & Automata Theory       ";
        t.innerHTML += '<input type="text" id="b7">' + '<br><br>';
        
        t.innerHTML+="Internet Protocol                        ";
        t.innerHTML += '<input type="text" id="c7">' + '<br><br>';
        
        t.innerHTML+="Departmental Elective-II                 ";
        t.innerHTML += '<input type="text" id="d7">' + '<br><br>';
        
        t.innerHTML+="Lab(DE-II)                               ";
        t.innerHTML += '<input type="text" id="e7">' + '<br><br>';
        
        t.innerHTML+="Software Lab-VII(SL & LP)                ";
        t.innerHTML += '<input type="text" id="f7">' + '<br><br>';
        
        t.innerHTML+="ID Course-IV                             ";
        t.innerHTML += '<input type="text" id="g7">' + '<br><br>';
        
        t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                          ";
        t.innerHTML += '<input type="text" id="sg17" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                         ";
        t.innerHTML += '<input type="text" id="sg27" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                        ";
        t.innerHTML += '<input type="text" id="sg37" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                         ";
        t.innerHTML += '<input type="text" id="sg47" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-V                          ";
        t.innerHTML += '<input type="text" id="sg57" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-VI                         ";
        t.innerHTML += '<input type="text" value=NaN id="sg67" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">';
    }
      if(v==8)
      {
          t.innerHTML="Industrial Training Cum Projects        ";
           t.innerHTML += '<input type="text" id="a8">' + '<br><br>';
          
          t.innerHTML += '<br>' + '<br>';
        t.innerHTML += "SGPA of SEM-I                          ";
        t.innerHTML += '<input type="text" id="sg18" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-II                         ";
        t.innerHTML += '<input type="text" id="sg28" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-III                        ";
        t.innerHTML += '<input type="text" id="sg38" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-IV                         ";
        t.innerHTML += '<input type="text" id="sg48" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-V                          ";
        t.innerHTML += '<input type="text" id="sg58" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-VI                         ";
        t.innerHTML += '<input type="text" id="sg68" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">' + '<br><br>';

        t.innerHTML += "SGPA of SEM-VII                        ";
        t.innerHTML += '<input type="text" value=NaN id="sg78" onfocus=this.value="" onblur=this.value=(this.value==""?NaN:this.value) style="border:2px solid black;text-align:center">';
      }  
    document.getElementById("sgb").style.marginTop="30px";
 }
 function calcsg()
 {
      var v = document.getElementById("semester").value;
    var r = document.getElementById("resin");
    var totalc = 0;
    var ftotalc = 0;
    var fobtc = 0;
    var n;
    var obtc = 0;
    var s1 = [];
    var val = "";
    if(v==1)
    {
         totalc=21;
         var regc={eg:4,ce:2,maths:4,physics:5,elec:4,pbi:2 };
         n=6;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
         val = ((document.getElementById("a").value.substring(0,2)).toUpperCase());
         if(val=="A+")
            obtc+=s1[0];
         else if(val=='A')
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=='B')
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=='C')
            obtc+=s1[5];
         else if(val=='D')
            obtc+=s1[6];                       
         val = ((document.getElementById("b").value.substring(0,2)).toUpperCase());  
             if(val=="A+")
            obtc+=s1[7];
         else if(val=='A')
            obtc+=s1[8]; 
         else if(val=="B+")
            obtc+=s1[9];
         else if(val=='B')
            obtc+=s1[10];
         else if(val=="C+")
            obtc+=s1[11];
         else if(val=='C')
            obtc+=s1[12];
         else if(val=='D')
            obtc+=s1[13];  
         val = ((document.getElementById("c").value.substring(0,2)).toUpperCase()); 
            if(val=="A+")
            obtc+=s1[14];
         else if(val=='A')
            obtc+=s1[15]; 
         else if(val=="B+")
            obtc+=s1[16];
         else if(val=='B')
            obtc+=s1[17];
         else if(val=="C+")
            obtc+=s1[18];
         else if(val=='C')
            obtc+=s1[19];
         else if(val=='D')
            obtc+=s1[20];    
         val = ((document.getElementById("d").value.substring(0,2)).toUpperCase());   
         if(val=="A+")
            obtc+=s1[21];
         else if(val=='A')
            obtc+=s1[22]; 
         else if(val=="B+")
            obtc+=s1[23];
         else if(val=='B')
            obtc+=s1[24];
         else if(val=="C+")
            obtc+=s1[25];
         else if(val=='C')
            obtc+=s1[26];
         else if(val=='D')
            obtc+=s1[27];     
         val = ((document.getElementById("e").value.substring(0,2)).toUpperCase());      
         if(val=="A+")
            obtc+=s1[28];
         else if(val=='A')
            obtc+=s1[29]; 
         else if(val=="B+")
            obtc+=s1[30];
         else if(val=='B')
            obtc+=s1[31];
         else if(val=="C+")
            obtc+=s1[32];
         else if(val=='C')
            obtc+=s1[33];
         else if(val=='D')
            obtc+=s1[34];  
         val = ((document.getElementById("f").value.substring(0,2)).toUpperCase());  
         if(val=="A+")
            obtc+=s1[35];
         else if(val=='A')
            obtc+=s1[36]; 
         else if(val=="B+")
            obtc+=s1[37];
         else if(val=='B')
            obtc+=s1[38];
         else if(val=="C+")
            obtc+=s1[39];
         else if(val=='C')
            obtc+=s1[40];
         else if(val=='D')
            obtc+=s1[41];      
         ftotalc=21;
    }
    else if(v==2)
    {
        totalc=24;
        var regc={ftp:4,ec:4,maths:4,me:4,mas:4,mp:2,pbi:2 };
        n=7;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
          val = ((document.getElementById("a2").value.substring(0,2)).toUpperCase());   
          if(val=="A+")
            obtc+=s1[0];
         else if(val=="A")
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=="B")
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=="C")
            obtc+=s1[5];
         else if(val=="D")
            obtc+=s1[6];       
         val = ((document.getElementById("b2").value.substring(0,2)).toUpperCase());  
         if(val=="A+")
            obtc+=s1[7];
         else if(val=="A")
            obtc+=s1[8]; 
         else if(val=="B+")
            obtc+=s1[9];
         else if(val=="B")
            obtc+=s1[10];
         else if(val=="C+")
            obtc+=s1[11];
         else if(val=="C")
            obtc+=s1[12];
         else if(val=="D")
            obtc+=s1[13];        
         val = ((document.getElementById("c2").value.substring(0,2)).toUpperCase());
         if(val=="A+")
            obtc+=s1[14];
         else if(val=="A")
            obtc+=s1[15]; 
         else if(val=="B+")
            obtc+=s1[16];
         else if(val=="B")
            obtc+=s1[17];
         else if(val=="C+")
            obtc+=s1[18];
         else if(val=="C")
            obtc+=s1[19];
         else if(val=="D")
            obtc+=s1[20];          
         val = ((document.getElementById("d2").value.substring(0,2)).toUpperCase());      
         if(val=="A+")
            obtc+=s1[21];
         else if(val=="A")
            obtc+=s1[22]; 
         else if(val=="B+")
            obtc+=s1[23];
         else if(val=="B")
            obtc+=s1[24];
         else if(val=="C+")
            obtc+=s1[25];
         else if(val=="C")
            obtc+=s1[26];
         else if(val=="D")
            obtc+=s1[27];    
         val = ((document.getElementById("e2").value.substring(0,2)).toUpperCase());      
         if(val=="A+")
            obtc+=s1[28];
         else if(val=="A")
            obtc+=s1[29]; 
         else if(val=="B+")
            obtc+=s1[30];
         else if(val=="B")
            obtc+=s1[31];
         else if(val=="C+")
            obtc+=s1[32];
         else if(val=="C")
            obtc+=s1[33];
         else if(val=="D")
            obtc+=s1[34];    
         val = ((document.getElementById("f2").value.substring(0,2)).toUpperCase()); 
         if(val=="A+")
            obtc+=s1[35];
         else if(val=="A")
            obtc+=s1[36]; 
         else if(val=="B+")
            obtc+=s1[37];
         else if(val=="B")
            obtc+=s1[38];
         else if(val=="C+")
            obtc+=s1[39];
         else if(val=="C")
            obtc+=s1[40];
         else if(val=="D")
            obtc+=s1[41];    
         val = ((document.getElementById("g2").value.substring(0,2)).toUpperCase()); 
         if(val=="A+")
            obtc+=s1[42];
         else if(val=="A")
            obtc+=s1[43]; 
         else if(val=="B+")
            obtc+=s1[44];
         else if(val=="B")
            obtc+=s1[45];
         else if(val=="C+")
            obtc+=s1[46];
         else if(val=="C")
            obtc+=s1[47];
         else if(val=="D")
            obtc+=s1[48];    
         ftotalc=45;
        fobtc+=document.getElementById("sg12").value * 21;
        
    }
    else if(v==3)
    {
        totalc=20;
        var regc={ds:4,cp:4,dcld:4,eng:4,id:4 };
        n=5;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
          val = ((document.getElementById("a3").value.substring(0,2)).toUpperCase());  
              if(val=="A+")
            obtc+=s1[0];
         else if(val=="A")
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=="B")
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=="C")
            obtc+=s1[5];
         else if(val=="D")
            obtc+=s1[6];
         val = ((document.getElementById("b3").value.substring(0,2)).toUpperCase()); 
               if(val=="A+")
            obtc+=s1[7];
         else if(val=="A")
            obtc+=s1[8]; 
         else if(val=="B+")
            obtc+=s1[9];
         else if(val=="B")
            obtc+=s1[10];
         else if(val=="C+")
            obtc+=s1[11];
         else if(val=="C")
            obtc+=s1[12];
         else if(val=="D")
            obtc+=s1[13];
         val = ((document.getElementById("c3").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[14];
         else if(val=="A")
            obtc+=s1[15]; 
         else if(val=="B+")
            obtc+=s1[16];
         else if(val=="B")
            obtc+=s1[17];
         else if(val=="C+")
            obtc+=s1[18];
         else if(val=="C")
            obtc+=s1[19];
         else if(val=="D")
            obtc+=s1[20];    
         val = ((document.getElementById("d3").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[21];
         else if(val=="A")
            obtc+=s1[22]; 
         else if(val=="B+")
            obtc+=s1[23];
         else if(val=="B")
            obtc+=s1[24];
         else if(val=="C+")
            obtc+=s1[25];
         else if(val=="C")
            obtc+=s1[26];
         else if(val=="D")
            obtc+=s1[27];    
         val = ((document.getElementById("e3").value.substring(0,2)).toUpperCase()); 
          if(val=="A+")
            obtc+=s1[28];
         else if(val=="A")
            obtc+=s1[29]; 
         else if(val=="B+")
            obtc+=s1[30];
         else if(val=="B")
            obtc+=s1[31];
         else if(val=="C+")
            obtc+=s1[32];
         else if(val=="C")
            obtc+=s1[33];
         else if(val=="D")
            obtc+=s1[34];     
         
         ftotalc=65;
        fobtc+=document.getElementById("sg13").value * 21;
        fobtc+=document.getElementById("sg23").value * 24;
    }
    else if(v==4)
    {
        totalc=24;
        var regc={os:4,dc:4,sp:4,ds:4,ca:4,id:4 };
        n=6;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
          val = (document.getElementById("a4").value.substring(0,2).toUpperCase());              
              if(val=="A+")
            obtc+=s1[0];
         else if(val=="A")
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=="B")
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=="C")
            obtc+=s1[5];
         else if(val=="D")
            obtc+=s1[6];     
        val = (document.getElementById("b4").value.substring(0,2).toUpperCase());
         if(val=="A+")
            obtc+=s1[7];
         else if(val=="A")
            obtc+=s1[8]; 
         else if(val=="B+")
            obtc+=s1[9];
         else if(val=="B")
            obtc+=s1[10];
         else if(val=="C+")
            obtc+=s1[11];
         else if(val=="C")
            obtc+=s1[12];
         else if(val=="D")
            obtc+=s1[13];          
        val = (document.getElementById("c4").value.substring(0,2).toUpperCase()); 
         if(val=="A+")
            obtc+=s1[14];
         else if(val=="A")
            obtc+=s1[15]; 
         else if(val=="B+")
            obtc+=s1[16];
         else if(val=="B")
            obtc+=s1[17];
         else if(val=="C+")
            obtc+=s1[18];
         else if(val=="C")
            obtc+=s1[19];
         else if(val=="D")
            obtc+=s1[20];          
         val = (document.getElementById("d4").value.substring(0,2).toUpperCase());    
         if(val=="A+")
            obtc+=s1[21];
         else if(val=="A")
            obtc+=s1[22]; 
         else if(val=="B+")
            obtc+=s1[23];
         else if(val=="B")
            obtc+=s1[24];
         else if(val=="C+")
            obtc+=s1[25];
         else if(val=="C")
            obtc+=s1[26];
         else if(val=="D")
            obtc+=s1[27];       
         val = (document.getElementById("e4").value.substring(0,2).toUpperCase()); 
         if(val=="A+")
            obtc+=s1[28];
         else if(val=="A")
            obtc+=s1[29]; 
         else if(val=="B+")
            obtc+=s1[30];
         else if(val=="B")
            obtc+=s1[31];
         else if(val=="C+")
            obtc+=s1[32];
         else if(val=="C")
            obtc+=s1[33];
         else if(val=="D")
            obtc+=s1[34];         
         val = (document.getElementById("f4").value.substring(0,2).toUpperCase()); 
         if(val=="A+")
            obtc+=s1[35];
         else if(val=="A")
            obtc+=s1[36]; 
         else if(val=="B+")
            obtc+=s1[37];
         else if(val=="B")
            obtc+=s1[38];
         else if(val=="C+")
            obtc+=s1[39];
         else if(val=="C")
            obtc+=s1[40];
         else if(val=="D")
            obtc+=s1[41];     
         ftotalc=89;
        fobtc+=document.getElementById("sg14").value * 21;
        fobtc+=document.getElementById("sg24").value * 24;
        fobtc+=document.getElementById("sg34").value * 20;
    }
    else if(v==5)
    {
        totalc=28;
        var regc={sad:4,nos:4,dbms:4,daa:4,cg:4,pl1:2,pl2:2,id:4 };
        n=8;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
          val = ((document.getElementById("a5").value.substring(0,2)).toUpperCase());   
           if(val=="A+")
            obtc+=s1[0];
         else if(val=="A")
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=="B")
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=="C")
            obtc+=s1[5];
         else if(val=="D")
            obtc+=s1[6];   
         val = ((document.getElementById("b5").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[7];
         else if(val=="A")
            obtc+=s1[8]; 
         else if(val=="B+")
            obtc+=s1[9];
         else if(val=="B")
            obtc+=s1[10];
         else if(val=="C+")
            obtc+=s1[11];
         else if(val=="C")
            obtc+=s1[12];
         else if(val=="D")
            obtc+=s1[13];    
         val = ((document.getElementById("c5").value.substring(0,2)).toUpperCase()); 
          if(val=="A+")
            obtc+=s1[14];
         else if(val=="A")
            obtc+=s1[15]; 
         else if(val=="B+")
            obtc+=s1[16];
         else if(val=="B")
            obtc+=s1[17];
         else if(val=="C+")
            obtc+=s1[18];
         else if(val=="C")
            obtc+=s1[19];
         else if(val=="D")
            obtc+=s1[20];     
         val = ((document.getElementById("d5").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[21];
         else if(val=="A")
            obtc+=s1[22]; 
         else if(val=="B+")
            obtc+=s1[23];
         else if(val=="B")
            obtc+=s1[24];
         else if(val=="C+")
            obtc+=s1[25];
         else if(val=="C")
            obtc+=s1[26];
         else if(val=="D")
            obtc+=s1[27];    
         val = ((document.getElementById("e5").value.substring(0,2)).toUpperCase()); 
          if(val=="A+")
            obtc+=s1[28];
         else if(val=="A")
            obtc+=s1[29]; 
         else if(val=="B+")
            obtc+=s1[30];
         else if(val=="B")
            obtc+=s1[31];
         else if(val=="C+")
            obtc+=s1[32];
         else if(val=="C")
            obtc+=s1[33];
         else if(val=="D")
            obtc+=s1[34];     
         val = ((document.getElementById("f5").value.substring(0,2)).toUpperCase());
          if(val=="A+")
            obtc+=s1[35];
         else if(val=="A")
            obtc+=s1[36]; 
         else if(val=="B+")
            obtc+=s1[37];
         else if(val=="B")
            obtc+=s1[38];
         else if(val=="C+")
            obtc+=s1[39];
         else if(val=="C")
            obtc+=s1[40];
         else if(val=="D")
            obtc+=s1[41]; 
         val = ((document.getElementById("g5").value.substring(0,2)).toUpperCase());
          if(val=="A+")
            obtc+=s1[42];
         else if(val=="A")
            obtc+=s1[43]; 
         else if(val=="B+")
            obtc+=s1[44];
         else if(val=="B")
            obtc+=s1[45];
         else if(val=="C+")
            obtc+=s1[46];
         else if(val=="C")
            obtc+=s1[47];
         else if(val=="D")
            obtc+=s1[48];
         val = ((document.getElementById("h5").value.substring(0,2)).toUpperCase());
          if(val=="A+")
            obtc+=s1[49];
         else if(val=="A")
            obtc+=s1[50]; 
         else if(val=="B+")
            obtc+=s1[51];
         else if(val=="B")
            obtc+=s1[52];
         else if(val=="C+")
            obtc+=s1[53];
         else if(val=="C")
            obtc+=s1[54];
         else if(val=="D")
            obtc+=s1[55];
         ftotalc=117;
        fobtc+=document.getElementById("sg15").value * 21;
        fobtc+=document.getElementById("sg25").value * 24;
        fobtc+=document.getElementById("sg35").value * 20;
        fobtc+=document.getElementById("sg45").value * 24;
    }
    else if(v==6)
    {
        totalc=28;
        var regc={ood:4,swe:4,oop:4,elect:4,lab:4,id2:4,id3:4 };
        n=7;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
          val = ((document.getElementById("a6").value.substring(0,2)).toUpperCase());  
           if(val=="A+")
            obtc+=s1[0];
         else if(val=="A")
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=="B")
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=="C")
            obtc+=s1[5];
         else if(val=="D")
            obtc+=s1[6];    
         val = ((document.getElementById("b6").value.substring(0,2)).toUpperCase()); 
          if(val=="A+")
            obtc+=s1[7];
         else if(val=="A")
            obtc+=s1[8]; 
         else if(val=="B+")
            obtc+=s1[9];
         else if(val=="B")
            obtc+=s1[10];
         else if(val=="C+")
            obtc+=s1[11];
         else if(val=="C")
            obtc+=s1[12];
         else if(val=="D")
            obtc+=s1[13];     
         val = ((document.getElementById("c6").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[14];
         else if(val=="A")
            obtc+=s1[15]; 
         else if(val=="B+")
            obtc+=s1[16];
         else if(val=="B")
            obtc+=s1[17];
         else if(val=="C+")
            obtc+=s1[18];
         else if(val=="C")
            obtc+=s1[19];
         else if(val=="D")
            obtc+=s1[20];    
         val = ((document.getElementById("d6").value.substring(0,2)).toUpperCase());
          if(val=="A+")
            obtc+=s1[21];
         else if(val=="A")
            obtc+=s1[22]; 
         else if(val=="B+")
            obtc+=s1[23];
         else if(val=="B")
            obtc+=s1[24];
         else if(val=="C+")
            obtc+=s1[25];
         else if(val=="C")
            obtc+=s1[26];
         else if(val=="D")
            obtc+=s1[27];      
         val = ((document.getElementById("e6").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[28];
         else if(val=="A")
            obtc+=s1[29]; 
         else if(val=="B+")
            obtc+=s1[30];
         else if(val=="B")
            obtc+=s1[31];
         else if(val=="C+")
            obtc+=s1[32];
         else if(val=="C")
            obtc+=s1[33];
         else if(val=="D")
            obtc+=s1[34];    
         val = ((document.getElementById("f6").value.substring(0,2)).toUpperCase()); 
          if(val=="A+")
            obtc+=s1[35];
         else if(val=="A")
            obtc+=s1[36]; 
         else if(val=="B+")
            obtc+=s1[37];
         else if(val=="B")
            obtc+=s1[38];
         else if(val=="C+")
            obtc+=s1[39];
         else if(val=="C")
            obtc+=s1[40];
         else if(val=="D")
            obtc+=s1[41];
         val = ((document.getElementById("g6").value.substring(0,2)).toUpperCase());
          if(val=="A+")
            obtc+=s1[42];
         else if(val=="A")
            obtc+=s1[43]; 
         else if(val=="B+")
            obtc+=s1[44];
         else if(val=="B")
            obtc+=s1[45];
         else if(val=="C+")
            obtc+=s1[46];
         else if(val=="C")
            obtc+=s1[47];
         else if(val=="D")
            obtc+=s1[48];
         
         ftotalc=145;
        fobtc+=document.getElementById("sg16").value * 21;
        fobtc+=document.getElementById("sg26").value * 24;
        fobtc+=document.getElementById("sg36").value * 20;
        fobtc+=document.getElementById("sg46").value * 24;
        fobtc+=document.getElementById("sg56").value * 28;
    }
    else if(v==7)
    {
        totalc=24;
        var regc={slp:4,auto:4,ip:4,delect:4,delab:2,swlab:2,id4:4 };
        n=7;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
          val = ((document.getElementById("a7").value.substring(0,2)).toUpperCase());      
           if(val=="A+")
            obtc+=s1[0];
         else if(val=="A")
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=="B")
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=="C")
            obtc+=s1[5];
         else if(val=="D")
            obtc+=s1[6];
         val = ((document.getElementById("b7").value.substring(0,2)).toUpperCase());    
          if(val=="A+")
            obtc+=s1[7];
         else if(val=="A")
            obtc+=s1[8]; 
         else if(val=="B+")
            obtc+=s1[9];
         else if(val=="B")
            obtc+=s1[10];
         else if(val=="C+")
            obtc+=s1[11];
         else if(val=="C")
            obtc+=s1[12];
         else if(val=="D")
            obtc+=s1[13];  
         val = ((document.getElementById("c7").value.substring(0,2)).toUpperCase());    
          if(val=="A+")
            obtc+=s1[14];
         else if(val=="A")
            obtc+=s1[15]; 
         else if(val=="B+")
            obtc+=s1[16];
         else if(val=="B")
            obtc+=s1[17];
         else if(val=="C+")
            obtc+=s1[18];
         else if(val=="C")
            obtc+=s1[19];
         else if(val=="D")
            obtc+=s1[20];  
         val = ((document.getElementById("d7").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[21];
         else if(val=="A")
            obtc+=s1[22]; 
         else if(val=="B+")
            obtc+=s1[23];
         else if(val=="B")
            obtc+=s1[24];
         else if(val=="C+")
            obtc+=s1[25];
         else if(val=="C")
            obtc+=s1[26];
         else if(val=="D")
            obtc+=s1[27];    
         val = ((document.getElementById("e7").value.substring(0,2)).toUpperCase());  
          if(val=="A+")
            obtc+=s1[28];
         else if(val=="A")
            obtc+=s1[29]; 
         else if(val=="B+")
            obtc+=s1[30];
         else if(val=="B")
            obtc+=s1[31];
         else if(val=="C+")
            obtc+=s1[32];
         else if(val=="C")
            obtc+=s1[33];
         else if(val=="D")
            obtc+=s1[34];    
         val = ((document.getElementById("f7").value.substring(0,2)).toUpperCase()); 
          if(val=="A+")
            obtc+=s1[35];
         else if(val=="A")
            obtc+=s1[36]; 
         else if(val=="B+")
            obtc+=s1[37];
         else if(val=="B")
            obtc+=s1[38];
         else if(val=="C+")
            obtc+=s1[39];
         else if(val=="C")
            obtc+=s1[40];
         else if(val=="D")
            obtc+=s1[41];
         val = ((document.getElementById("g7").value.substring(0,2)).toUpperCase());
          if(val=="A+")
            obtc+=s1[42];
         else if(val=="A")
            obtc+=s1[43]; 
         else if(val=="B+")
            obtc+=s1[44];
         else if(val=="B")
            obtc+=s1[45];
         else if(val=="C+")
            obtc+=s1[46];
         else if(val=="C")
            obtc+=s1[47];
         else if(val=="D")
            obtc+=s1[48];
         
         ftotalc=169;
        fobtc+=document.getElementById("sg17").value * 21;
        fobtc+=document.getElementById("sg27").value * 24;
        fobtc+=document.getElementById("sg37").value * 20;
        fobtc+=document.getElementById("sg47").value * 24;
        fobtc+=document.getElementById("sg57").value * 28;
        fobtc+=document.getElementById("sg67").value * 28;
    }
     else if(v==8)
    {
        totalc=22;
        var regc={industry:22 };
        n=1;
         var j=10;
         for(x in regc)
         {
             while(j>=4)
             {
                 s1.push(regc[x]*j--);
             }
             j=10;
         }
          val = ((document.getElementById("a8").value.substring(0,2)).toUpperCase());      
          if(val=="A+")
            obtc+=s1[0];
         else if(val=="A")
            obtc+=s1[1]; 
         else if(val=="B+")
            obtc+=s1[2];
         else if(val=="B")
            obtc+=s1[3];
         else if(val=="C+")
            obtc+=s1[4];
         else if(val=="C")
            obtc+=s1[5];
         else if(val=="D")
            obtc+=s1[6];
         ftotalc=191;
        fobtc+=document.getElementById("sg18").value * 21;
        fobtc+=document.getElementById("sg28").value * 24;
        fobtc+=document.getElementById("sg38").value * 20;
        fobtc+=document.getElementById("sg48").value * 24;
        fobtc+=document.getElementById("sg58").value * 28;
        fobtc+=document.getElementById("sg68").value * 28;
        fobtc+=document.getElementById("sg78").value * 24;
    }
    r.innerHTML = "Your SGPA is : " + (obtc / totalc).toPrecision(3) + '<br>' + '<br>';
    r.innerHTML+= "Your CGPA is   : " + ((fobtc+obtc)/ftotalc).toPrecision(3)+'<br>'+'<br>';
    document.getElementById("sgb").style.marginBottom="20pt";
 }
