/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Affichearticlecard = ({ article }) => {
  return (
    <div className='container'>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start"
        }}
      >
        {article ? (
          article.map((art, index) => (
            <Card key={index} sx={{ maxWidth: 300, margin: 1, flexGrow: 1 }}>
              <CardMedia
                component='img'
                height='140'
                image={art.imageart}
                alt={art.reference}
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                  Designation: {art.designation.substr(0, 20)}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Prix: {art.prix} DT
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' color='primary'>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Affichearticlecard;
