function solve(intput) 
{
    const faceCard=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suitCard={
        'S':'♠',
        'H':'♥',
        'D':'♦',
        'C':'♣'
    }
    let cards=[]
    let notAcard=false;
    for (let i = 0; i < intput.length; i++) {
        let card=intput[i];
        let face=card[0];
        let suit=card[1];
        if (card.length==2) {
        face=card[0];
        suit=card[1];
        }else{
        face=card[0]+card[1];
        suit=card[2];
        }

        if ((faceCard.includes(face)&&suitCard[suit])&&notAcard==false) {
            card=face+suitCard[suit]
            cards.push(card);
            
        }
        else{
            notAcard==true;
            cards=[];
            card=face+suit
            cards.push(card)

        }
        
    }
    if (cards.length==1)
    {
        console.log('Invalid card: '+ cards.join())
    }else{
        console.log(cards.join(' '))
    }
   
    
}
solve(['AS', '10D', 'KH', '2C']);
solve(['5S', '3D', 'QD', '1C']);