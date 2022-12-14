function solve(face,suit) {
    const faceCard=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suitCard={
        'S':'♠',
        'H':'♥',
        'D':'♦',
        'C':'♣'
    }
    if (!faceCard.includes(face)||!suitCard[suit])
    {
        throw new Error('Invalid face or suit');
        
    }
    let card={
        face,
        suit,
        toString(){
            console.log(this.face+suit[this.suit])
        }
    }
   
    
 
}
solve('A', 'S');
solve('10', 'H');
solve('1', 'C');