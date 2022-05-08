var a,b,y,x,w;
a= parseFloat(prompt("Enter a ",""));
b= parseFloat(prompt("Enter b ",""));
x= parseFloat(prompt("Enter x ",""));
y=Math.pow(x,2)*(x+1)/b-Math.pow(Math.sin(x+a),2);
w=Math.sqrt((x*b)/a)+Math.pow(y,2)*Math.pow(Math.cos(Math.pow(x+b),2),2);
alert("y="+y);
alert("w="+w);


