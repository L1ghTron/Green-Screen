var fg= new SimpleImage("drewRobert.png");
var bg= new SimpleImage("dinos.png");
var ot= new SimpleImage(fg.getWidth() , fg.getHeight());

for(var pix of fg.values())
{
    if(pix.getGreen() > pix.getRed()+ pix.getBlue())
    {
        var x= pix.getX();
        var y= pix.getY();
        var bgPix= bg.getPixel(x,y);
        ot.setPixel(x,y,bgPix);
        
    }
    else
    {
        ot.setPixel(pix.getX(),pix.getY(), pix);
    }
}

print(ot);
