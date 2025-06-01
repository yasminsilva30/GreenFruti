import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepo: Repository<Produto>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    const produto = this.produtoRepo.create(createProdutoDto);
    return this.produtoRepo.save(produto);
  }

  findAll(categoria?: string) {
    if (categoria) {
      return this.produtoRepo.find({
        where: { categoria },
      });
    }
    return this.produtoRepo.find();
  }  

  findOne(id: number) {
    return this.produtoRepo.findOne({ where: { id } });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtoRepo.update(id, updateProdutoDto);
  }

  remove(id: number) {
    return this.produtoRepo.delete(id);
  }
}
