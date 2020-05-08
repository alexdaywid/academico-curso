using meii.Business.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace meii.infrastrutucture.Context
{
    public class MEContext : DbContext
    {
        public MEContext(DbContextOptions<MEContext> options) : base(options){ }
        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<PessoaFisica> PessoaFisicas { get; set; }
        public DbSet<PessoaJuridica> PessoaJuridicas { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }
        public DbSet<Estudante> Estudantes { get; set; }
        public DbSet<Cartao> Cartoes { get; set; }
        public DbSet<Curso> Cursos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<PedidoCurso> PedidoCursos { get; set; }
        public DbSet<Pagamento> Pagamentos { get; set; }
        public DbSet<Matricula> Matriculas { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Mapeamento many to many PedidoCurso
            modelBuilder.Entity<PedidoCurso>()
                .HasKey(mc => new { mc.PedidoId, mc.CursoId });
            modelBuilder.Entity<PedidoCurso>()
                .HasOne(mc => mc.Pedido)
                .WithMany(p => p.PedidoCurso)
                .HasForeignKey(mc => mc.PedidoId);
            modelBuilder.Entity<PedidoCurso>()
                .HasOne(mc => mc.Curso)
                .WithMany(c => c.PedidoCurso)
                .HasForeignKey(mc => mc.CursoId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            #endregion

            #region Mapeamento many to many Matricula
            modelBuilder.Entity<Matricula>()
                .HasKey(m => new { m.EstudanteId, m.CursoId });
            modelBuilder.Entity<Matricula>()
                .HasOne(m => m.Estudante)
                .WithMany(e => e.Matricula)
                .HasForeignKey(m => m.EstudanteId);
            modelBuilder.Entity<Matricula>()
                .HasOne(m => m.Curso)
                .WithMany(c => c.Matricula)
                .HasForeignKey(m => m.CursoId)
                .OnDelete(DeleteBehavior.Cascade);
            #endregion

            base.OnModelCreating(modelBuilder);
        }
    }
}
