import styled from 'styled-components';


const CardStyle = styled.div`
@keyframes translate {
  from {
      right:0;
  }

  to {
    right:30000px;
  }
}
@keyframes opacityCard {
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}

margin-left: 5%;
width: 230px;
flex-grow:1;
flex: none;
    .cardStyle{
        position: relative;
        height: 322px;
        padding: 15px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0px 2px 12px #00000020;
        animation-duration: 1000s;
animation-name: translate;
    }
    .readmore{
        width: 73%;
        p{
            text-align:center;
        }
    }
    .img{
        position:relative;
    }
    .imgFondo{
        margin-top: 2%;
        background-image:${props => props.photo ? `url(${props.photo})` : "photo"};
        background-color: ${props => (props.photo ? '' : '#fffff')};
        width:100%;
        height:170px;
        margin: 0 auto;
        border-radius: 12px;
    }
    .imgPeople{
        position:absolute;
        background-image: url("${props => props.people ? props.people : "people"}");
        background-color: ${props => (props.photo ? '' : '#fffff')};
        width:40px;
        height:40px;
        border-radius: 12px;
        border: 5px solid white;
        left: 70%;
        top: 85%;
    }

    .country{
        padding: 5% 10% 3% 0;
    }
    .text{
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    .description{
        padding:3% 0 6%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        
        margin-left: 3%;
        .description{
            padding:4% 0 7%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        margin-top: ${props => props.number ? props.number : "4%"};
        margin-left: 2%;
        height:100px;
        .cardStyle{
            padding:0;
            height: auto;
            
        }
        .text{
            display:none;
            opacity:0;
        }
        .imgPeople{
            display:none;
        }

        &:hover {
            
             .cardStyle{
                height: 300px;
                padding: 15px;
            }
            .text{
                display:block;
                opacity:1;
                animation: opacityCard 1s;
            }
            .imgPeople{
                display:block;
            }
            .imgFondo{
                height:150px;

            }
        }
        .description{
            padding: 3% 0 4%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin-top: ${props => props.number ? props.number : "4%"};
        margin-left: 2.2%;
        height:100px;
        .cardStyle{
            padding:0;
            height: auto;
        }
        .text{
            display:none;
        }
        .imgPeople{
            display:none;
        }

        &:hover {
             .cardStyle{
                height: 300px;
                padding: 15px;
            }
            .text{
                display:block;
                opacity:1;
                animation: opacityCard 1s;
            }
            .imgPeople{
                display:block;
            }
            .imgFondo{
                height:150px;
            }
        }
        .description{
            padding: 2% 0 6%;
        }
    }
    @media only screen and (min-width:1441px){
        margin-top: ${props => props.number ? props.number : "4%"};
        margin-left: 1.25%;
        height:100px;
        .cardStyle{
            padding:0;
            height: auto;
        }
        .text{
            display:none;
        }
        .imgPeople{
            display:none;
        }
        .description{
            padding: 6% 0 9%;
        }

        &:hover {
             .cardStyle{
                height:300px;
                padding: 15px;
            }
            .text{
                display:block;
                opacity:1;
                animation: opacityCard 1s;
            }
            .imgPeople{
                display:block;
            }
            .imgFondo{
                height:130px;
            }
        }
    }
`;

export { CardStyle };