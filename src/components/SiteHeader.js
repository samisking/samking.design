import React from 'react';
import { Box, Headline, Caption, Link } from '../design-system';

function SiteHeader(props) {
  return (
    <Box as="header" role="banner" pt={[1, 2]} px={[1, 2]} {...props}>
      <Headline as="h1" fontSize={1} letterSpacing="extreme" mb={1}>
        <Link to="/" shouldUnderline={false}>
          Sam King
        </Link>
      </Headline>
      <Caption as="h2" color="textAlt">
        Product Designer for Restaurants at Deliveroo
      </Caption>
    </Box>
  );
}

export default SiteHeader;