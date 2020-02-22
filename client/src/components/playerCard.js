import React from "react";
import styled from "styled-components";



function PlayerCard(props) {
    console.log ("PlayerCard: Props: ", props);

    return (
        <Wrapper>
            {
                props.players.map(player => (
                    <CardWrapper key ={player.id}>
                        <h1>
                            {player.name}
                        </h1>
                        <p>
                            {player.country}
                        </p>
                    </CardWrapper>
                ))
            }
        </Wrapper>
    )
};

export default PlayerCard;
