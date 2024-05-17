import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionDash() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
        <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
                <Typography sx={{ fontWeight: 'bold', width: '40%', flexShrink: 0 }}>
                    Local Package
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                The Local Package is ideal for users who want basic features tailored to their local needs. It includes essential tools for managing local data and communication.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography sx={{ fontWeight: 'bold', width: '40%', flexShrink: 0 }}>Basic Package</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                The Basic Package offers fundamental features suitable for all users. It provides essential tools for managing data and communication efficiently.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography sx={{ fontWeight: 'bold', width: '40%', flexShrink: 0 }}>
                Pro Package
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                The Pro Package is designed for professional users who need advanced features. It includes premium tools for data management, analysis, and collaboration.
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}
