using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Configuration;
using meii.Api.ViewModel;
using meii.Business.Entities;

namespace meii.Api.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Estudante, EstudanteViewModel>()
                .ForMember(e => e.Pessoa, opt => opt.MapFrom(e => e.Pessoa)).ReverseMap();

            CreateMap<Estudante, EstudantePessoaFisicaViewModel>()
               .ForMember(e => e.Pessoa, opt => opt.MapFrom(e => e.Pessoa))
               .ForMember(e=>e.Cartao, opt => opt.MapFrom(e => e.Cartao)).ReverseMap();

            #region Mapeamento de pessoa
            CreateMap<Pessoa, PessoaViewModel>()
                .Include<PessoaFisica, PessoaFisicaViewModel>()
                .Include<PessoaJuridica, PessoaJuridicaViewModel>()
                .ForMember(p=> p.Endereco, opt => opt.MapFrom(e => e.Endereco))
                .ReverseMap();

            CreateMap<PessoaFisica, EstudantePessoaFisicaViewModel>().ReverseMap();
            CreateMap<PessoaFisica, PessoaFisicaViewModel>().ReverseMap();
            CreateMap<PessoaJuridica, PessoaJuridicaViewModel>().ReverseMap();
            #endregion 
            
            CreateMap<Endereco, EnderecoViewModel>().ReverseMap();
            CreateMap<Cartao, CartaoViewModel>().ReverseMap();
            CreateMap<Curso, CursoViewModel>().ReverseMap();
            CreateMap<Pagamento, PagamentoViewModel>().ReverseMap();
            CreateMap<Matricula, MatriculaViewModel>().ReverseMap();

            CreateMap<Pedido, PedidoViewModel>()
                .ForMember(p => p.Curso, opt => opt.MapFrom(pc => pc.PedidoCurso.Select(c => c.Curso)))
                .ForMember(p => p.Pagamento, opt => opt.MapFrom(p => p.Pagamento));

            CreateMap<PedidoViewModel, Pedido>()
               .ForMember(p => p.PedidoCurso, opt => opt.MapFrom(p => MapearPedidoCursos(p.Curso.ToList())))
               .ForMember(p => p.Pagamento, opt => opt.MapFrom(p => p.Pagamento));


        }

        public List<PedidoCurso> MapearPedidoCursos(List<CursoViewModel> cursoViewModel)
        {
            var pedidoCursos = new List<PedidoCurso>();
            foreach (var curso in cursoViewModel)
            {
                var pedidoCurso = new PedidoCurso 
                { 
                    CursoId = curso.Id,
                };
                pedidoCursos.Add(pedidoCurso);  
            }
            return pedidoCursos;
        }

        public List<PedidoCurso> MapearPedidoCursos(CursoViewModel cursoViewModel)
        {
            var pedidoCursos = new List<PedidoCurso>();

            var pedidoCurso = new PedidoCurso
            {
                CursoId = cursoViewModel.Id,
            };
            pedidoCursos.Add(pedidoCurso);
            return pedidoCursos;
        }



    }
}
