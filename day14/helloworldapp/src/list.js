import React from 'react';
class List extends React.Component{
    render(){
        return(
            <div>
                <h2> List of Fresh Flowers</h2>
                <br/><hr/>
                <ol>
                    <li>Rose</li>
                    <li>Gerbera</li>
                    <li>Lily</li>
                    <li>Marigold</li>
                    <li>Jasmine</li>
                </ol>
            </div>
        );
    }
}

export default List;