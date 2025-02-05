import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <div>
          <h1>Add a credit card</h1>
          {/* <AddCard /> */}
        </div>
        <div>
          <h1>Add a Password</h1>
          {/* <AddPassword /> */}
        </div>
      </div>
      <div className="flex">
        <div>
          <h1>Your Cards</h1>
          {/* <YourCards /> */}
        </div>
        <div>
          <h1>Your Passwords</h1>
          {/* <YourPasswords /> */}
        </div>
      </div>
    </div>
  );
}
