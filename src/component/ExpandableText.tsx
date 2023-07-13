import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= limit) return <div> {children} </div>;
  const summary = children.substring(0, limit);
  return (
    <Text>
      {expanded ? children : `${summary}...`}
      <Button
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
        size="xs"
        marginLeft={1}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
