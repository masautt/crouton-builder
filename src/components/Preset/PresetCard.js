import React from 'react';
import styled from "styled-components";
import {Row, Col, Col4, Col3, PresetCardContainer, RowCentered} from "../MyBootstrap";

const PresetCard = ({title, subtitle, imgs}) => {
    return (
        <Col3>
            <PresetCardContainer>
                <RowCentered>
                   <h3>{title}</h3>                
                </RowCentered>
                <RowCentered>
                    <h6>{subtitle}</h6>
                </RowCentered>
                <RowCentered>
                    {imgs.map(image =>
                        <Col3>
                            <img src={image} alt={title} style={{ width: "100%"}}></img>
                        </Col3>)}
                </RowCentered>
            </PresetCardContainer>
        </Col3>
    );
};

export default PresetCard;
