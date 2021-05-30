var num = parseFloat(prompt("enter your mark"));
if(num>100)
    document.write("Invalid");
if(num>=80)
    document.write("A+");
else if (num>=70)
    document.write("A");
else if (num>=60)
    document.write("A-");
else if (num>=50)
    document.write("B");
else if (num>=40)
    document.write("C");
else if (num>=35)
    document.write("D");
else if (num>=33)
    document.write("E");
else
    document.write("F");