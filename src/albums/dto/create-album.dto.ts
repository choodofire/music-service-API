import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAlbumDto {
  @ApiProperty({ example: 'Sempiternal', description: 'Название альбома' })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;
}
