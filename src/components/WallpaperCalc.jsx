import React, { useState } from "react";
import {
  Container,
  Heading,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";

const WallpaperCalculator = () => {
  const [wallpaperPrice, setWallpaperPrice] = useState("");
  const [workPrice, setWorkPrice] = useState("");
  const [area, setArea] = useState("");
  const [totalCost, setTotalCost] = useState(null);
  const [image, setImage] = useState(null);

  const calculateCost = () => {
    const wallpaperCost = wallpaperPrice * area;
    const workCost = workPrice * area;
    const total = wallpaperCost + workCost;
    setTotalCost(total);
  };

  return (
    <Container maxW="container.md">
      <Heading as="h1" size="xl" mb={6}>
        Wallpaper Calculator
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Цена обоев за рулон</FormLabel>
          <Input
            type="number"
            placeholder="Введите цену обоев"
            value={wallpaperPrice}
            onChange={(e) => setWallpaperPrice(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Загрузить изображение обоев</FormLabel>
          <Input
            type="file"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Цена работы за м²</FormLabel>
          <Input
            type="number"
            placeholder="Введите цену работы"
            value={workPrice}
            onChange={(e) => setWorkPrice(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Количество м²</FormLabel>
          <Input
            type="number"
            placeholder="Введите количество м²"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="blue" onClick={calculateCost}>
          Рассчитать
        </Button>
      </VStack>

      {totalCost && (
        <Box mt={8} mb={8} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
          <Heading as="h2" size="md" mb={4}>
            Итоговая смета
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Параметр</Th>
                  <Th>Значение</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Цена обоев</Td>
                  <Td>{wallpaperPrice} руб./м²</Td>
                </Tr>
                <Tr>
                  <Td>Цена работы</Td>
                  <Td>{workPrice} руб./м²</Td>
                </Tr>
                <Tr>
                  <Td>Количество м²</Td>
                  <Td>{area} м²</Td>
                </Tr>
                <Tr>
                  <Td>Общая стоимость</Td>
                  <Td>{totalCost} руб.</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          {image && (
            <Box mt={4}>
              <Image src={image} alt="Wallpaper preview" boxSize="200px" objectFit="cover" />
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};

export default WallpaperCalculator;