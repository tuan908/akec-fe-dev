import ContactForm from "@/components/Contact/Form";
import CustomMap from "@/components/Contact/Map";
import Grid from "@mui/material/Grid";

const Page = async () => {
  return (
    <div>
      <Grid container spacing={3} className="contactMainForm">
        <Grid item xs={12} sm={6}>
          <CustomMap />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
