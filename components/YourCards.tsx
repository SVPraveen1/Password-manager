import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Cardprops {
  cardNo: string,
  expiry: string,
  cvv: number,
}

export function YourCards({cards}: {cards: Cardprops[]}) {
  return (
    // <div className="space-y-4">
      <Card className="w-full">
        <CardHeader>
            <div className="flex justify-between items-center px-2">
              <CardTitle>Card Number</CardTitle>
              <CardTitle>Expiry</CardTitle>
              <CardTitle>CVV</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 h-48 overflow-y-auto">
            { cards.length === 0 && <span className="text-muted-foreground">No cards added</span> }
            {cards.map((card, index) => (
              <li 
                key={`${card.cardNo}-${card.expiry}-${index}`} 
                className="flex justify-between items-center p-2 bg-secondary-100 rounded"
              >
                <span>{card.cardNo}</span>
                <span>{card.expiry}</span>
                <span>{card.cvv}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    // </div>
  )
}