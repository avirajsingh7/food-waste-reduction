function RequestCard() {
    return (
      <div className="w-96 border flex flex-col gap-6 py-4">
        <div>
          <div className="flex h-8 justify-between items-center px-12">
            <span className="flex items-center">Arpan Gupta</span>
            <div className="border bg-gray-300 h-5/6"></div>
            <span className="flex items-center">9864646464</span>
          </div>
          <div className="border border-gray w-5/6 m-auto"></div>
        </div>
        <div className="flex justify-between px-14 text-sm">
          <div className="flex flex-col gap-2">
            <span>Requested</span>
            <div>
              <ul className="flex items-center flex-col">
                <li>Juice</li>
                <li>Bread</li>
                <li>Burger</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Quantity</span>
            <div>
              <ul className="flex items-center flex-col">
                <li>02</li>
                <li>01</li>
                <li>03</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-10 m-auto">
            <button className="bg-editButton rounded h-10 w-20 text-sm">
              Accept
            </button>
            <button className="bg-deleteButton rounded text-sm h-10 w-20">
              Decline
            </button>
          </div>
        </div>
      </div>
    );
}

export default RequestCard;