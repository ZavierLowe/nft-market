import React from 'react';

function Card(props) {
      return (
            <div className="max-w-sm bg-gray-400 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://images.unsplash.com/photo-1637819203905-2294a31391d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Sunset in the mountains"/>
            <div  className="px-6 py-4">
              <div  className="font-bold text-center text-xl mb-2">Broken Hands</div>
              <p  className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vrferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            
          </div>
      );
}

export default Card;