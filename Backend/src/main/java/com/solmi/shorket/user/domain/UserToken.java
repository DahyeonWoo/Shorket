package com.solmi.shorket.user.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "USER_TOKEN_TB")
public class UserToken {
    @Id
    @GeneratedValue
    private Long idx;

    @ManyToOne
    @JoinColumn(name = "USERS_TB_IDX", nullable = false)
    private User user;

    @Column(columnDefinition = "TEXT NOT NULL")
    private String token;

    @Enumerated(value = EnumType.STRING)
    @ColumnDefault("'Y'")
    @Column(nullable = false)
    private TokenStatusType statusType;

    public UserToken updateToken(String token) {
        this.token = token;
        return this;
    }

    @Builder
    public UserToken(User user, String token) {
        this.user = user;
        this.token = token;
    }
}

