import bannerImage from './../../banner.png';
import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreateIcon from '@mui/icons-material/Create';
import ArticleIcon from '@mui/icons-material/Article';
import styles from './styles';

const Banner = () => {
    const topics = [
        {
            icon: <TaskAltIcon />,
            title: 'Online MCQ Test'
        },
        {
            icon: <MenuBookIcon />,
            title: 'Question Bank'
        },
        {
            icon: <CreateIcon />,
            title: 'Assesments'
        },
        {
            icon: <ArticleIcon />,
            title: 'Solutions'
        }
    ]
    return (
        <Box sx={styles.banner}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid md={6}> 
                        <Typography
                         variant="h3" 
                         component="h3"
                         sx={styles.bannerTitle}
                         >
                            Welcome to,
                            <br/>
                            The World of MCQ!
                        </Typography>
                        <Typography
                         sx={styles.bannerSubTitle}
                        >
                            Your smart examination hall. Explore, Learn, Share and Grow with your community.
                        </Typography>
                        
                        <Box sx={styles.topicListBox}>
                            <List sx={ styles.topicList }>
                                {topics.map((topic) => (
                                <ListItem sx={styles.topicListItem}>
                                    <ListItemIcon sx={styles.listItemIcon}>
                                        {topic.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {topic.title}
                                    </ListItemText >
                                </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box sx={styles.registerBtnContainer}>
                            <Button variant="outlined" size="large" sx={ styles.registerBtn }>Register Now</Button>
                        </Box>
                    </Grid>
                    <Grid 
                     md={6}
                     sx={styles.bannerImg}
                     component="img"
                     src={bannerImage}
                     alt="banner"
                    >
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner;